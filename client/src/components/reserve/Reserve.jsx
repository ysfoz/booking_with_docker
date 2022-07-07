import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import SelectRoom from "../selectRoom/SelectRoom";
import { LoadingSpinner } from "../spinner/spinner.style";
import { CloseIcon, Wrapper, Container, Title, Button } from "./reserve.style";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";

const Reserve = ({ setOpenModal, id, days }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { loading, data } = useFetch(`/hotel/room/${id}`);
  const { date } = useContext(SearchContext);
  const navigate = useNavigate();

  const getDatesInRange = (start, days) => {
    const date = new Date(start.getTime());
    const list = [];
    while (days >= 0) {
      list.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
      days -= 1;
    }
    return list;
  };

  const selectedDays = getDatesInRange(date[0]?.startDate, days);

  const isAvailable = (room) => {
    const isFound = room?.unavailableDates?.some((date) =>
      selectedDays?.includes(new Date(date).getTime())
    );
    return isFound;
  };

  const setRoomAvailability = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomNumberId) => {
          axios
            .put(`/room/availability/${roomNumberId}`, {
              date: selectedDays,
            })
            .then((res) => {
              navigate("/", { state: { message: res?.data } });
            });
        })
      );
    } catch (error) {
      console.log(error);
    } finally {
      setOpenModal(false);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Select your rooms:</Title>
        <CloseIcon icon={faCircleXmark} onClick={() => setOpenModal(false)} />
        {loading ? (
          <LoadingSpinner />
        ) : (
          data?.map((room,index) => (
            <SelectRoom
              isAvailable={isAvailable}
              selectedDates={selectedDays}
              key={index}
              room={room}
              selectedRooms={selectedRooms}
              setSelectedRooms={setSelectedRooms}
            />
          ))
        )}
        <Button onClick={setRoomAvailability}>Reserve</Button>
      </Wrapper>
    </Container>
  );
};

export default Reserve;

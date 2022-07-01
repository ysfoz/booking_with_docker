import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import {
  ButtonContainer,
  Wrapper,
  City,
  DateBox,
  SearchButton,
  StyledDateRange,
} from "./searchBar.style";
import OptionBox from "../optionBox/OptionBox";
import { SearchContext } from "../../context/SearchContext";

const SearchBar = () => {
  const [openDate, setOpenDate] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    rooms: 1,
  });
  const [city, setCity] = useState(undefined);
  const { dispatch } = useContext(SearchContext);
  let navigate = useNavigate();

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { city, date, options } });
    navigate("/list", { state: { date, city, options } });
  };

  return (
    <Wrapper>
      <ButtonContainer>
        <FontAwesomeIcon icon={faBed} />
        <City
          placeholder="Chicago"
          title={city}
          onChange={(e) => setCity(e?.target?.value)}
        />
      </ButtonContainer>
      <ButtonContainer
        onClick={() => {
          setOpenDate((prev) => !prev);
          setOpenOption(false);
        }}
      >
        <FontAwesomeIcon icon={faCalendarDays} />
        <DateBox>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
          date[0].endDate,
          "dd/MM/yyyy"
        )}`}</DateBox>
      </ButtonContainer>
        {openDate && (
          <StyledDateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
          />
        )}
      <ButtonContainer
        onClick={() => {
          setOpenOption((p) => !p);
          setOpenDate(false);
        }}
      >
        <FontAwesomeIcon icon={faPerson} />
        <DateBox>
          {`${options.adult} Adult `} <br /> {`${options.children} Children`}{" "}
          <br /> {`${options.rooms} Rooms`}
        </DateBox>
      </ButtonContainer>
      {openOption && <OptionBox options={options} setOptions={setOptions} />}
      <ButtonContainer>
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </ButtonContainer>
    </Wrapper>
  );
};

export default SearchBar;

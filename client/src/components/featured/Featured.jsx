import { useNavigate } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import {
  Container,
  Image,
  Title,
  SubTitel,
  TitleContainer,
  Wrapper,
} from "./featured.style";
import { LoadingSpinner } from "../spinner/spinner.style";
import { useState, useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const Featured = () => {
  const { data, loading } = useFetch(
    "/hotel/countbycity?cities=berlin,paris,chicago"
  );

  const [date] = useState([
    {
      startDate: new Date(),
      endDate: new Date().setDate(new Date().getDate() + 1),
    },
  ]);

  const { dispatch } = useContext(SearchContext);

  const navigate = useNavigate();

  const getHotels = async (city) => {
    navigate("/list", { state: { city: city } });
    dispatch({ type: "NEW_SEARCH", payload: { city, date } });
  };

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Container>
          <Wrapper onClick={() => getHotels("berlin")}>
            <Image src="https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
            <TitleContainer>
              <Title>Berlin</Title>
              <SubTitel>{data[0] || 1}  Properties</SubTitel>
            </TitleContainer>
          </Wrapper>
          <Wrapper onClick={() => getHotels("chicago")}>
            <Image src="https://images.unsplash.com/photo-1581373449483-37449f962b6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" />
            <TitleContainer>
              <Title>Chicago</Title>
              <SubTitel>{data[2] || 1} Properties</SubTitel>
            </TitleContainer>
          </Wrapper>
          <Wrapper onClick={() => getHotels("paris")}>
            <Image src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80" />
            <TitleContainer>
              <Title>Paris</Title>
              <SubTitel>{data[1] || 1} Properties</SubTitel>
            </TitleContainer>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default Featured;

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";

import useFetch from "../../hooks/useFetch";
import { LoadingSpinner } from "../spinner/spinner.style";
import {
  Container,
  Wrapper,
  Image,
  Title,
  TitleContainer,
  City,
  Price,
  Rating,
  RatingsContainer,
  Rewiew,
  Note,
} from "./featuredProperties.style";

const FeaturedProperties = () => {
  const { data, loading } = useFetch(
    "/hotel?featured=true&limit=6&min=40&max=900"
  );
  const navigate = useNavigate();

  const [date] = useState([
    {
      startDate: new Date(),
      endDate: new Date(new Date().setDate(new Date()?.getDate() + 1)),
    },
  ]);

  const [options] = useState({
    adult: 1,
    children: 0,
    rooms: 1,
  });

  const { dispatch } = useContext(SearchContext);

  const getHotel = (id) => {
    navigate(`/hotel/${id}`);
    dispatch({ type: "NEW_SEARCH", payload: { date,options } });
  };

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Container>
          {data?.map((hotel, index) => {
            return (
              <Wrapper key={index}>
                <Image
                  src={
                    hotel?.photos[0] ||
                    "https://images.unsplash.com/photo-1554009975-d74653b879f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  }
                  onClick={() => getHotel(hotel?._id)}
                />
                <TitleContainer>
                  <Title>{hotel?.name}</Title>
                  <City>
                    {hotel?.city}
                  </City>
                </TitleContainer>
                <Price>Starting from {hotel?.cheapestPrice} zt</Price>
                <RatingsContainer>
                  {hotel?.rating && <Rating>{hotel.rating * 2}</Rating>}
                  <Rewiew>
                    {Math.ceil((Math.random() + 0.1) * 100)} rewiews
                  </Rewiew>
                </RatingsContainer>
                  <Note>{hotel.rating * 2 > 9 ? "Wanderful" : "Gut"}</Note>
              </Wrapper>
            );
          })}
        </Container>
      )}
    </>
  );
};

export default FeaturedProperties;

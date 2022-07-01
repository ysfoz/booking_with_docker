import { useNavigate } from "react-router-dom";

import {
  Container,
  InfoContainer,
  ImageContainer,
  PriceContainer,
  Image,
  Title,
  Info,
  Price,
  Punkt,
  Review,
  SubInfo,
  Button,
  ReviewContainer,
  AvailableContainer,
} from "./searchItem.style";

const SearchItem = ({ item }) => {
  let navigate = useNavigate();

  return (
    <Container>
      <ImageContainer>
        <Image
          src={
            item?.photos[0] ||
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          }
        />
      </ImageContainer>
      <InfoContainer>
        <Title>{item?.name}</Title>
        <Info>{item?.distance}</Info>
        <Info filled>Free airport taxi</Info>
        <Info bold>Studio Apertment with Air conditioning</Info>
        <Info>Entire studio . 1 bathroom . 21m² 1 full bed</Info>
        <Info green bold>
          Free cancellation
        </Info>
        <Info green>You can cancel later, so lock in this price today!</Info>
      </InfoContainer>
      <PriceContainer>
        {item?.rating && (
          <ReviewContainer>
            <Review>Excellent</Review>
            <Punkt>{item?.rating}</Punkt>
          </ReviewContainer>
        )}
        <AvailableContainer>
          <Price>{item?.cheapestPrice}</Price>
          <SubInfo>Includes taxes and fees</SubInfo>
          <Button onClick={() => navigate(`/hotel/${item?._id}`)}>
            See Availability
          </Button>
        </AvailableContainer>
      </PriceContainer>
    </Container>
  );
};

export default SearchItem;

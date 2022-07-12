import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  justify-content: space-between;

  ${tablet({ "flex-wrap": "wrap", width: "100%" })}
`;

const Wrapper = styled.div`
  margin: 5px 5px;
  ${tablet({ width: "30%" })}
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  ${mobile({ height: "100px" })}
  :hover {
    width: 101%;
    height: 202px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Title = styled.span`
  font-weight: 400;
  font-size: 14px;
  ${mobile({ "font-size": "12px" })}
`;
const City = styled.span`
  font-weight: 300;
  font-size: 12px;
  text-transform: capitalize;
`;

const Price = styled.h6`
  font-weight: 600;
  font-size: 14px;
  height: 30px;
  ${mobile({ "font-size": "12px", height: "20px" })}
`;

const RatingsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Rating = styled.button`
  width: 30px;
  background-color: #003580;
  padding: 2px 4px;
  border-radius: 5px;
  border-bottom-left-radius: 0px;
  color: white;
  font-weight: 600;
  font-size: 14px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: crimson;
  }
  :active {
    background-color: aliceblue;
  }

  ${mobile({ "font-size": "12px" })}
`;

const Note = styled.span`
  font-weight: 400;
  font-size: 14px;
  ${mobile({ "font-size": "10px" })}
`;

const Rewiew = styled.span`
  color: lightgray;
  font-weight: 400;
  font-size: 12px;
`;

export {
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
};

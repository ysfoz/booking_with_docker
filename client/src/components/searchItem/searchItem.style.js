import styled from "styled-components";
import { mobile, small } from "../responsive";

const Container = styled.div`
  flex: 3;
  flex-direction: row;
  display: flex;
  border: 1px solid lightgray;
  border-radius: 10px;
  overflow: hidden;
  padding: 10px;
  gap: 10px;
  height: 200px;
  ${mobile({"flex-direction":"column"})}
  ${small({"flex-direction":"column"})}
`;

const ImageContainer = styled.div`
  flex: 1.2;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  ${small({"height":"300px"})}
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  justify-content: space-between;
`;

const Title = styled.h3`
  padding: 3px;
  color: #0071c2;
`;

const Info = styled.h5`
  font-weight: ${(props) => (props.bold ? "bold" : "400")};
  padding: 4px;
  background-color: ${(props) => props.filled && "green"};
  color: ${(props) => props.filled && "white"};
  color: ${(props) => props.green && "green"};
  width: fit-content;
  border-radius: 5px;
  font-size: 12px;
`;

const PriceContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ReviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const AvailableContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: flex-end;
`;

const Review = styled.span`
  font-weight: 600;
`;
const Punkt = styled.span`
  font-weight: 600;
  background-color: #003580;
  padding: 5px;
  color: white;
  font-size: 14px;
`;

const Button = styled.button`
  border: none;
  padding: 8px;
  background-color: #0071c2;
  color: white;
  font-weight: 600;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
`;
const SubInfo = styled.h6`
  color: gray;
  font-size: 12px;
  font-weight: 400;
`;

const Price = styled.h3`
  font-weight: 400;
  font-size: 22px;
`;

export {
  Container,
  ImageContainer,
  PriceContainer,
  InfoContainer,
  Image,
  Title,
  Info,
  Review,
  Price,
  Punkt,
  Button,
  SubInfo,
  ReviewContainer,
  AvailableContainer,
};

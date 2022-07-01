import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  flex: 1;
  border-radius: 7px;
  overflow: hidden;
  cursor: pointer;
  margin: 0px 5px;
  
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  ${mobile({"height":"70px"})}
`;

const TitleContainer = styled.div``;

const Title = styled.h4`
  text-transform: capitalize;
  ${mobile({"font-size":"12px"})}
`;

const SubTitle = styled.h5`
  font-weight: 200;
  ${mobile({"font-size":"10px"})}
`;

export { Container, Wrapper, Image, Title, TitleContainer, SubTitle };

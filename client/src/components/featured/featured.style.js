import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  z-index: 1px;
  
`;

const Wrapper = styled.div`
  position: relative;
  color: white;
  border-radius: 10px;
  overflow: hidden;
  height: 250px;
  flex: 1;
  margin: 0px 5px;
  ${mobile({"height":"150px","margin-top":"20px"})}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const TitleContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
`;

const Title = styled.h1`
${mobile({"font-size":"20px"})}`;

const SubTitel = styled.h2`
${mobile({"font-size":"16px"})}
`;

export { Container, Title, Image, SubTitel, TitleContainer, Wrapper };

import styled from "styled-components";
import { middle } from "../../components/responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ListContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Title = styled.h3`
  width: 1024px;
  ${middle({ width: "fit-content" })}
`;

const ToastyContainer = styled.div`
margin-top: 30px;
  background-color: #64ffda;
  width: fit-content;
  padding: 5px;
`;

const Toasty = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: #607d8b;
  text-align: center;
`;

export { Container, Wrapper, ListContainer, Title, Toasty, ToastyContainer };

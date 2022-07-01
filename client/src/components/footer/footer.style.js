import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  justify-content: space-between;
  margin-bottom: 50px;
  
`;
const Wrapper = styled.div`
  padding: 10px;
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  color: lightblue;
  
  ${mobile({"font-size":"10px"})}
`;
const ListItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
`;

export { Container, Wrapper, List, ListItem };

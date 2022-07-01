import styled from "styled-components";
import { tablet } from "../../components/responsive";

const Container = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 1024px;
  margin: auto auto;
  margin-top: 20px;
  margin-bottom: 50px;
  ${tablet({ "flex-direction": "column", width: "98%" })}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: fit-content;
  padding-right: 5px;
`;

export { Container, Wrapper };

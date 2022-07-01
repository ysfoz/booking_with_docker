import styled from "styled-components";
import { mobile, small } from "../responsive";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  ${mobile({ "flex-direction": "column" })}
`;
const Wrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
const Title = styled.div`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  ${small({ "font-size": "12px" })}
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const TitleContainer = styled.div``;

const Check = styled.input`
  width: 19px;
  height: 20px;
`;
const Label = styled.label`
  font-size: 10px;
  font-weight: 600;
  color: gray;
`;

export {
  Container,
  Title,
  Check,
  Label,
  InputContainer,
  TitleContainer,
  Wrapper,
};

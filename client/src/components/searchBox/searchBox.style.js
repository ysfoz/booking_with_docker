import styled from "styled-components";
import { mobile, small, tablet } from "../responsive";

const Container = styled.div`
  background-color: #febb02;
  padding: 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  position: sticky;
  top: 10px;
  gap: 10px;
  
  ${tablet({ "flex-direction": "column", "align-items": "center","position":"static" })}
`;
const Wrapper = styled.div`
  ${tablet({ display: "flex", gap: "20px" })}
`;

const Search = styled.h2`
  color: #555;
`;
const InputsContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.top ? "column" : "row")};
  justify-content: ${(props) => (!props.top ? "space-between" : "none")};
  align-items: center;
  gap: 10px;
  ${tablet({ gap: "10px", "flex-direction": "column" })}
`;
const Titel = styled.label`
  font-size: 12px;
  font-weight: 500;
  margin-left: ${(props) => (!props.top ? "15px" : "none")};
  margin-top: 4px;
  ${tablet({ margin: "0" })}
`;

const DestinationandDate = styled.input`
  padding: 7px;
  width: 220px;
  ${tablet({ width: "250px" })}
  ${small({ width: "160px" })}
  ${mobile({ width: "140px", "font-size": "10px" })}
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${tablet({ "flex-direction": "row", "flex-wrap": "wrap" })}
`;

const Options = styled.span`
  margin-top: 4px;
  font-size: 12px;
  font-weight: 500;
  ${tablet({ display: "none" })}
`;
const OptionsInput = styled.input`
  margin-left: 5px;
  width: 60px;
  ${mobile({ width: "30px" })}
`;
const Button = styled.button`
  margin-top: 20px;
  cursor: pointer;
  border: none;
  padding: 6px;
  color: white;
  background-color: #0071c2;
  ${tablet({ width: "300px" })}
`;

export {
  Container,
  Search,
  InputsContainer,
  Titel,
  DestinationandDate,
  OptionsContainer,
  Options,
  OptionsInput,
  Button,
  Wrapper,
};

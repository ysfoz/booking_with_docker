import styled from "styled-components";
import { DateRange } from "react-date-range";
import { middle, mobile, tablet } from "../responsive";

const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  max-width: 1024px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: #ffb300 solid 2px;
  padding: 5px;
  position: absolute;
  bottom: -65px;
  ${middle({ "max-width": "94%" })}
  ${tablet({ bottom: "-43px" })}
`;
const ButtonContainer = styled.div`
  color: lightgray;
  position: relative;
  display: flex;
  flex-direction: column;
`;
const City = styled.input`
  width: 120px;
  margin-left: 10px;
  border: none;
  padding: 4px;
  text-align: center;
  ${tablet({ fontSize: "10px","width":"70px" })}
`;
const DateBox = styled.span`
  color: black;
  color: lightgray;
  margin-left: 10px;
  cursor: pointer;
  ${tablet({ fontSize: "10px" })}
`;

const SearchButton = styled.button`
  border: none;
  background-color: #0071c2;
  color: white;
  padding: 10px 16px;
  border-radius: 2px;
  ${mobile({ padding: "6px 3px", "font-size": "10px" })}
`;

const StyledDateRange = styled(DateRange)`
  position: absolute;
  top: 80px;
  left: 25%;
  z-index: 2;
  ${mobile({ "left": "2%" })}
  ${tablet({ "top":"60px" })}
`;

export {
  Wrapper,
  ButtonContainer,
  SearchButton,
  DateBox,
  City,
  StyledDateRange,
};

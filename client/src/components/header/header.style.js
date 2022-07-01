import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  background-color: #003580;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 10px 20px;

`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  color: white;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 25px;
  margin: 15px 0px;
${mobile({"justify-content":"space-between"})}
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;

`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  color: white;
  background-color: #003580;
  ${mobile({"display":"none"})}
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  `;

const Title = styled.span`
  font-size: 25px;
  font-weight: bold;
  ${mobile({"font-size":"18px"})}
  
  `;

const Desc = styled.span`
  font-weight: 200;
  margin-top: 10px;
  font-style: 10px;
  ${mobile({"font-size":"14px"})}
`;

const AccountButton = styled.button`
  border: none;
  cursor: pointer;
  background-color:${(props)=> props.white ? "white" : "#0071c2"} ;
  display: flex;
  color: ${(props)=> props.white ? " #003580" : "white"};
  margin: 40px 0px;
  padding: 6px;
  width: 120px;
  justify-content: center;
`;

export {
  Wrapper,
  Container,
  ButtonContainer,
  ButtonBox,
  Button,
  Title,
  TitleContainer,
  Desc,
  AccountButton,
};

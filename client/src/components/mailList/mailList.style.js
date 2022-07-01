import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  background-color: #003580;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  height: 150px;
`;
const Title = styled.h3`
  color: white;
  font-weight: 400;
`;
const SubTitel = styled.span`
  margin-bottom: 10px;
  color: white;
  font-weight: 200;
  font-size: 12px;
`;
const MailContainer = styled.div``;
const Mail = styled.input`
  margin-right: 5px;
  padding: 3px 10px;
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 3px;
  ${mobile({ width: "200px" })}
`;
const Button = styled.button`
  border: none;
  background-color: #0071c2;
  color: #fff;
  font-weight: 200;
  padding: 5px 15px;
  height: 37px;
  border-radius: 3px;
  cursor: pointer;
`;

export { Container, Title, SubTitel, MailContainer, Mail, Button };

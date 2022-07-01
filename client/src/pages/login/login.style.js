import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")
      center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 35%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 16px 0px;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #0071c2;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 5px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: red;
  margin: 7px;
`;

const StyledLink = styled(Link)`
  width: 40%;
  border: none;
  padding: 15px 20px;
  color: #0071c2;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ToastyContainer = styled.div`
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

export {
  Container,
  Wrapper,
  Error,
  Button,
  ButtonWrapper,
  Input,
  Form,
  Title,
  StyledLink,
  Toasty,
  ToastyContainer,
};

import styled from "styled-components";
import { Link } from "react-router-dom";


const Container = styled.div`
  height: 50px;
  background-color: #003580;
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.span`
  font-weight: 600;
  font-size: 20px;
`;
const Button = styled.button`
  margin-left: 20px;
  bottom: none;
  padding: 5px 10px;
  color: #003580;
  cursor: pointer;
  border: none;
`;
const ButtonContainer = styled.div``;

const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;
`

const Profile =styled.div`
background-color: #fff;
width: 30px;
height: 30px;
border-radius: 25px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 20px;
cursor: pointer;
position: relative;
`

const Name = styled.span`
color:#0071c2;
font-size: 20px;
text-transform: capitalize;
font-weight: 600;
`
const Logout = styled.button`
z-index: 2;
position: absolute;
bottom: -28px;
right: 15px;
border: none;
padding: 4px 10px;
font-size: 12px;
font-weight: 400;
color: white;
background-color:#0071c2;
border-radius: 3px;
`

export { Wrapper, Container, Logo, Button, ButtonContainer,StyledLink,Profile,Name,Logout };

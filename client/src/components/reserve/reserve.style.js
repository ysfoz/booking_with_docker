import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.613);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;
const Wrapper = styled.div`
  padding: 10px 10px 20px 10px;
  width: 80%;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 30px;
  background-color: #fff;
  position: relative;
  flex-direction: column;
  overflow-y: scroll;
  border-radius: 10px;
`;

const CloseIcon = styled(FontAwesomeIcon)`
  position: sticky;
  top: 5px;
  left: 100%;
  font-size: 30px;
  color: #0071c2;
  cursor: pointer;
  display: block;
`;

const Title = styled.h4`
  position: absolute;
  top: 10px;
  color: #0071c2;
  left: 10px;
  display: block;
`;

const Button = styled.button`
  position: sticky;
  bottom: 1px;
  border: none;
  background-color: #0071c2;
  color: white;
  width: 200px;
  padding: 8px 10px;
  border-radius: 4px;
  cursor: pointer;
`;

export { Container, CloseIcon, Wrapper, Title, Button };

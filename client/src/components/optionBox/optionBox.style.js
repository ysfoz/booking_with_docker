import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 70px;
  left: 60%;
  padding: 9px;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0px 0px 19px 1px rgba(0, 0, 0, 0.55);
  box-shadow: 0px 0px 19px 1px rgba(0, 0, 0, 0.55);
  border-radius: 6px;
  justify-content: center;
  color: black;
  z-index: 2;
  background-color: #fff;
`;
const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;
  align-items: center;
  font-size: 12px;
`;
const Item = styled.span``;
const Count = styled.span`
  width: 20px;
  text-align: center;
`;
const ButtonBox = styled.div`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #003580;
  background-color: #fff;
  cursor: pointer;
  :disabled {
    cursor: no-drop;
  }
`;

export { Container, Item, ItemBox, Button, ButtonBox, Count };

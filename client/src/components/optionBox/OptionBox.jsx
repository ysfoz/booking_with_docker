import {
  Container,
  Item,
  ItemBox,
  Button,
  ButtonBox,
  Count,
} from "./optionBox.style";

const OptionBox = ({ options, setOptions }) => {
  const handleOptions = (name, operation) =>
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
      };
    });

  return (
    <Container>
      <ItemBox>
        <Item>Adult</Item>
        <ButtonBox>
          <Button
            disabled={options.adult <= 1}
            onClick={() => handleOptions("adult", "dec")}
          >
            -
          </Button>
          <Count>{options.adult}</Count>
          <Button onClick={() => handleOptions("adult", "inc")}>+</Button>
        </ButtonBox>
      </ItemBox>
      <ItemBox>
        <Item>Children</Item>
        <ButtonBox>
          <Button
            disabled={options.children <= 0}
            onClick={() => handleOptions("children", "dec")}
          >
            -
          </Button>
          <Count>{options.children}</Count>
          <Button onClick={() => handleOptions("children", "inc")}>+</Button>
        </ButtonBox>
      </ItemBox>
      <ItemBox>
        <Item>Rooms</Item>
        <ButtonBox>
          <Button
            disabled={options.rooms <= 1}
            onClick={() => handleOptions("rooms", "dec")}
          >
            -
          </Button>
          <Count>{options.rooms}</Count>
          <Button onClick={() => handleOptions("rooms", "inc")}>+</Button>
        </ButtonBox>
      </ItemBox>
    </Container>
  );
};

export default OptionBox;

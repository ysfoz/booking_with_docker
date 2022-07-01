import {
  Check,
  Container,
  Title,
  Label,
  InputContainer,
  TitleContainer,
  Wrapper,
} from "./selectRoom.style";

const SelectRoom = ({ room, selectedRooms, setSelectedRooms, isAvailable }) => {
  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  return (
    <Container>
      <TitleContainer>
        <Title weight="600">{room?.title}</Title>
        <Title>{room?.desc}</Title>

        <Title size="12px">
          Max People : <b>{room?.maxPeople}</b>
        </Title>
        <Title weight="600">${room?.price}</Title>
      </TitleContainer>
      <Wrapper>
        {room?.roomNumbers?.map((number, i) => {
          return (
            <InputContainer key={i}>
              <Label>{number?.number}</Label>
              <Check
                type={"checkbox"}
                value={number?._id}
                onChange={handleSelect}
                disabled={isAvailable(number)}
              />
            </InputContainer>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default SelectRoom;

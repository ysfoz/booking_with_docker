import { useState, useContext } from "react";
import { format } from "date-fns";

import {
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
} from "./searchBox.style";
import { SearchContext } from "../../context/SearchContext";

const SearchBox = () => {
  const { city, date, options, dispatch } = useContext(SearchContext);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const [newCity, setNewCity] = useState(city);
  const [newOptions, setNewOptios] = useState({
    adult: options?.adult,
    children: options?.children,
    rooms: options?.rooms,
  });

  const handleOptions = (name, e) => {
    setNewOptios((prev) => {
      return {
        ...prev,
        [name]: e.target.value,
      };
    });
  };

  const handleReSearch = () => {
    dispatch({
      type: "NEW_SEARCH",
      payload: { city: newCity, min, max, date, options },
    });
  };

  const dateValue = `${format(date[0]?.startDate, "MM/dd/yyyy")} to ${format(
    date[0]?.endDate,
    "MM/dd/yyyy"
  )}`;

  return (
    <Container>
      <Search>Search</Search>
      <Wrapper>
        <InputsContainer top>
          <Titel top>Destination</Titel>
          <DestinationandDate
            value={newCity}
            onChange={(e) => setNewCity(e.target.value)}
          />
        </InputsContainer>
        <InputsContainer top>
          <Titel top>Check-in Date</Titel>
          <DestinationandDate defaultValue={dateValue} />
        </InputsContainer>
      </Wrapper>
      <OptionsContainer>
        <Options>Options</Options>
        <InputsContainer>
          <Titel>Min price</Titel>
          <OptionsInput
            type={"number"}
            min={1}
            onChange={(e) => setMin(e?.target?.value)}
          />
        </InputsContainer>
        <InputsContainer>
          <Titel>Max price</Titel>
          <OptionsInput
            type={"number"}
            min={1}
            onChange={(e) => setMax(e?.target?.value)}
          />
        </InputsContainer>
        <InputsContainer>
          <Titel>Adult</Titel>
          <OptionsInput
            type={"number"}
            min={1}
            value={newOptions?.adult < 1 ? undefined : newOptions?.adult}
            onChange={(e) => handleOptions("adult", e)}
          />
        </InputsContainer>
        <InputsContainer>
          <Titel>Children</Titel>
          <OptionsInput
            type={"number"}
            min={0}
            value={newOptions?.children < 0 ? undefined : newOptions?.children}
            onChange={(e) => handleOptions("children", e)}
          />
        </InputsContainer>
        <InputsContainer>
          <Titel>Room</Titel>
          <OptionsInput
            autoFocus
            type={"number"}
            min={1}
            value={newOptions?.rooms < 1 ? undefined : newOptions?.rooms}
            onChange={(e) => handleOptions("rooms", e)}
          />
        </InputsContainer>
      </OptionsContainer>

      <Button onClick={handleReSearch}>Search</Button>
    </Container>
  );
};

export default SearchBox;

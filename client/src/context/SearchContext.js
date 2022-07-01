import { createContext, useReducer } from "react";

const INITIAL_VALUE = {
  min: undefined,
  max: undefined,
  city: undefined,
  date: [],
  options: {
    adult: undefined,
    children: undefined,
    rooms: undefined,
  },
};

export const SearchContext = createContext(INITIAL_VALUE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_VALUE;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_VALUE);

  return (
    <SearchContext.Provider
      value={{
        city: state.city,
        date: state.date,
        options: state.options,
        min: state.min,
        max: state.max,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

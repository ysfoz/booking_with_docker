import { createContext, useReducer } from "react";

const INITIAL_VALUE = {
  min: undefined,
  max: undefined,
  city: undefined,
  date: [],
  options: {
    adult: 1,
    children: 0,
    rooms: 1,
  },
};

export const SearchContext = createContext(INITIAL_VALUE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return {
        ...INITIAL_VALUE,
        min: action.payload.min,
        max: action.payload.max,
        city: action.payload.city,
        date: action.payload.date,
        options: action.payload.options,
      };
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

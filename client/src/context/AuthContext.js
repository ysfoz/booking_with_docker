import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
  message: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    case "REGISTER":
      return {
        loading: false,
        error: false,
        message: action.payload,
      };
    case "RESET":
      return { message: null };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        message: state.message,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

import { createContext, useEffect, useReducer } from "react";
import { AuthReducer } from "./AuthReducers";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider value={{ user: state.user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

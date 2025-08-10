import { createContext, useEffect, useReducer } from "react";
import { claimReducer } from "./claimReducer";

const INITIAL_STATE = {
  claims: JSON.parse(localStorage.getItem("claims")) || [],
};

const ClaimContext = createContext();

export const ClaimContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(claimReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("claims", JSON.stringify(state.claims));
  }, [state.claims]);

  return (
    <ClaimContext.Provider
      value={{
        claims: state.claims,
        dispatch,
      }}
    >
      {children}
    </ClaimContext.Provider>
  );
};

export default ClaimContext;

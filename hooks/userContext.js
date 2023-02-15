import React from "react";
import { useContext } from "react";

const userContext = React.createContext({});

export const userProvider = ({ children }) => {
  return <userContext.Provider value={null}>{children}</userContext.Provider>;
};

export default function userContext() {
  return useContext(userContext);
}

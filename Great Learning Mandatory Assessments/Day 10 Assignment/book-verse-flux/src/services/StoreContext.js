import React, { createContext } from "react";
import BookStore from "../stores/BookStore";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={{ BookStore }}>
      {children}
    </StoreContext.Provider>
  );
};

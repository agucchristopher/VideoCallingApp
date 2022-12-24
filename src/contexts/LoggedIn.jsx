import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export const ContextProvider = ({ children }) => {
  const [loggedin, setloggedin] = useState(false);
  AsyncStorage.getItem("IsLoggedIn").then((value) => setloggedin(value));
  const setIsLoggedIn = (e) => {
    //   setCurrentMode(e.target.value);
    AsyncStorage.setItem("IsLoggedIn", e.target.value);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <LoginContext.Provider
      value={{
        loggedin,
        setIsLoggedIn,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => useContext(LoginContext);

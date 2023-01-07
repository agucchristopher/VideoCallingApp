import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export const ContextProvider = ({ children }) => {
  const [loggedin, setloggedin] = useState(false);
  const getUser = async () => {
    const data = await AsyncStorage.getItem("IsLoggedIn");
    setloggedin(data);
  };
  getUser();
  const setIsLoggedIn = (user) => {
    //   setCurrentMode(e.target.value);
    AsyncStorage.setItem("IsLoggedIn", JSON.stringify(user));
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

// ThemeContext.js
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const getLocalstorage = ()=>{
    const result = localStorage.getItem('darkmode')
    if(result && result === 'true'){
      return true
    }
    return false 
  }
  const [nightMode, setNightMode] = useState(getLocalstorage()||false);

  const toggleTheme = () => {
    localStorage.setItem('darkmode',nightMode?'false':'true')
    return setNightMode(!nightMode);
  };

  return (
    <ThemeContext.Provider value={{ nightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

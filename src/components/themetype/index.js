// ThemeContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const { alldata } = require('./datatotranslate');

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const translationfunction = () => {
    const country = localStorage.getItem('country');
    const countryData = alldata.find(single => single.language === country);
    if (countryData) {
      return setdatatoshow(countryData);
    }
    return setdatatoshow(alldata[0]);
  };

  const [datatoShow, setdatatoshow] = useState(alldata[0]);

  useEffect(() => {
    return translationfunction();
  }, []);

  const toggletranslation = code => {
    localStorage.setItem('country', code);
    return translationfunction();
  };

  const getLocalstorage = () => {
    const result = localStorage.getItem('darkmode');
    if (result && result === 'true') {
      return true;
    }
    return false;
  };
  const [nightMode, setNightMode] = useState(getLocalstorage() || false);

  const toggleTheme = () => {
    localStorage.setItem('darkmode', nightMode ? 'false' : 'true');
    return setNightMode(!nightMode);
  };

  return (
    <ThemeContext.Provider
      value={{ nightMode, toggleTheme, datatoShow, toggletranslation }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

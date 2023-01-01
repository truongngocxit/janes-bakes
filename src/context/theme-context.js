import { createContext, useState } from "react";

const darkModeContext = createContext();

const ThemeContextProvider = function ({ children }) {
  const [darkModeIsOn, setDarkModeIsOn] = useState(false);

  const toggleDarkMode = function () {
    setDarkModeIsOn((prevMode) => !prevMode);
  };

  return (
    <darkModeContext.Provider
      value={{
        darkModeIsOn,
        toggleDarkMode,
      }}
    >
      {children}
    </darkModeContext.Provider>
  );
};

export { darkModeContext };
export default ThemeContextProvider;

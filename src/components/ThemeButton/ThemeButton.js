import classes from "./ThemeButton.module.css";
import SunSVG from "../UI/SunSVG";
import MoonSVG from "../UI/MoonSVG";
import { useState, useContext } from "react";
import { darkModeContext } from "../../context/theme-context";

const ThemeButton = function () {
  const { darkModeIsOn, toggleDarkMode } = useContext(darkModeContext);
  const [isLight, setIsLight] = useState(true);
  const handleToggleLight = function () {
    setIsLight(!isLight);
    toggleDarkMode();
  };
  const { themeBtnContainer, themeInnerBtn, btnIcon, light, dark, darkMode } =
    classes;
  return (
    <button
      className={`${themeBtnContainer} ${darkModeIsOn ? darkMode : ""}`}
      onClick={handleToggleLight}
    >
      <div className={`${themeInnerBtn} ${isLight ? light : dark}`}>
        {isLight && <SunSVG className={btnIcon} />}
        {!isLight && <MoonSVG className={btnIcon} />}
      </div>
    </button>
  );
};

export default ThemeButton;

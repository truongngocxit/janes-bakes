import classes from "./ThemeButton.module.css";
import SunSVG from "../UI/SunSVG";
import MoonSVG from "../UI/MoonSVG";
import { useState } from "react";

const ThemeButton = function () {
  const [isLight, setIsLight] = useState(true);
  const handleToggleLight = function () {
    setIsLight(!isLight);
  };
  const { themeBtnContainer, themeInnerBtn, btnIcon, light, dark } = classes;
  return (
    <button className={themeBtnContainer} onClick={handleToggleLight}>
      <div className={`${themeInnerBtn} ${isLight ? light : dark}`}>
        {isLight && <SunSVG className={btnIcon} />}
        {!isLight && <MoonSVG className={btnIcon} />}
      </div>
    </button>
  );
};

export default ThemeButton;

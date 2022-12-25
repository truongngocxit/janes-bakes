import classes from "./ThemeButton.module.css";
import SunSVG from "../UI/SunSVG";

const ThemeButton = function () {
  const { themeBtnContainer, themeInnerBtn, sunIcon } = classes;
  return (
    <button className={themeBtnContainer}>
      <div className={themeInnerBtn}>
        <SunSVG className={sunIcon} />
      </div>
    </button>
  );
};

export default ThemeButton;

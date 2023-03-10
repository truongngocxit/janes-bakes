import classes from "./BottomNavBar.module.css";
import Hamburger from "../UI/HamburgetSVG";
import ThemeButton from "../ThemeButton/ThemeButton";
import { useDispatch } from "react-redux";
import { footerActions } from "../../reduxStore/footer-display";
import { useContext } from "react";
import { darkModeContext } from "../../context/theme-context";

const BottomNavBar = function () {
  const { darkModeIsOn } = useContext(darkModeContext);
  const dispatch = useDispatch();
  const handleOpenFooter = function () {
    dispatch(footerActions.onFooter());
  };
  const { bottomNavContainer, iconContainer, hamburgerIcon, darkMode } =
    classes;
  return (
    <div className={`${bottomNavContainer} ${darkModeIsOn ? darkMode : ""}`}>
      <div className={iconContainer} onClick={handleOpenFooter}>
        <Hamburger className={hamburgerIcon} />
      </div>
      <ThemeButton />
    </div>
  );
};

export default BottomNavBar;

import classes from "./BottomNavBar.module.css";
import Hamburger from "../UI/HamburgetSVG";
import ThemeButton from "../ThemeButton/ThemeButton";
import { useDispatch } from "react-redux";
import { footerActions } from "../../reduxStore/footer-display";

const BottomNavBar = function () {
  const dispatch = useDispatch();
  const handleOpenFooter = function () {
    dispatch(footerActions.onFooter());
  };
  const { bottomNavContainer, iconContainer, hamburgerIcon } = classes;
  return (
    <div className={bottomNavContainer}>
      <div className={iconContainer} onClick={handleOpenFooter}>
        <Hamburger className={hamburgerIcon} />
      </div>
      <ThemeButton />
    </div>
  );
};

export default BottomNavBar;

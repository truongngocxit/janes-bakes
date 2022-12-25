import classes from "./BottomNavBar.module.css";
import Hamburger from "../UI/HamburgetSVG";
import ThemeButton from "../ThemeButton/ThemeButton";

const BottomNavBar = function () {
  const { bottomNavContainer, hamburgerIcon } = classes;
  return (
    <div className={bottomNavContainer}>
      <Hamburger className={hamburgerIcon} />
      <ThemeButton />
    </div>
  );
};

export default BottomNavBar;

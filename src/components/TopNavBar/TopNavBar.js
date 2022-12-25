import classes from "./TopNavBar.module.css";
import CartSVG from "../UI/CartSVG";
import MainLogoSVG from "../UI/MainLogoSVG";
import CartButton from "../CartButton/CartButton";

const TopNavBar = function () {
  const { navBar, navBarLogo, logoName, mainLogo } = classes;
  return (
    <nav className={navBar}>
      <div className={navBarLogo}>
        <MainLogoSVG className={mainLogo} />
        <h2 className={logoName}>Jane's Bakes</h2>
      </div>
      <CartButton />
    </nav>
  );
};

export default TopNavBar;

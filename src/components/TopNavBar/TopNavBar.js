import classes from "./TopNavBar.module.css";
import MainLogoSVG from "../UI/MainLogoSVG";
import { NavLink } from "react-router-dom";
import HomeSVG from "../UI/HomeSVG";
import StoreSVG from "../UI/StoreSVG";
import CartSVG from "../UI/CartSVG";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { darkModeContext } from "../../context/theme-context";

const TopNavBar = function ({ hasBackground = false }) {
  const itemsQuantity = useSelector((state) => state.cart.totalQuantity);
  const { darkModeIsOn } = useContext(darkModeContext);
  const {
    navBar,
    navBarLogo,
    logoName,
    mainLogo,
    navBarBackground,
    navLinks,
    navLink,
    cartQuantity,
    activeNavLink,
    darkMode,
  } = classes;

  const navLinkStyle = function ({ isActive }) {
    return isActive ? `${navLink} ${activeNavLink}` : navLink;
  };
  return (
    <nav
      className={`${navBar} ${darkModeIsOn ? darkMode : ""} ${
        hasBackground ? navBarBackground : ""
      }`}
    >
      <NavLink className={navBarLogo} to="/">
        <MainLogoSVG className={mainLogo} />

        <h2 className={logoName}>Jane's Bakes</h2>
      </NavLink>
      <div className={navLinks}>
        <NavLink className={navLinkStyle} to="/">
          <HomeSVG />
        </NavLink>
        <NavLink className={navLinkStyle} to="store">
          <StoreSVG />
        </NavLink>
        <NavLink className={navLinkStyle} to="checkout">
          {itemsQuantity > 0 && (
            <div className={cartQuantity}>{itemsQuantity}</div>
          )}
          <CartSVG />
        </NavLink>
      </div>
    </nav>
  );
};

export default TopNavBar;

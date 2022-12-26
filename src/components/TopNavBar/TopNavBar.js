import classes from "./TopNavBar.module.css";
import MainLogoSVG from "../UI/MainLogoSVG";
import CartButton from "../CartButton/CartButton";
import { Link } from "react-router-dom";

const TopNavBar = function ({ hasBackground = false }) {
  const { navBar, navBarLogo, logoName, mainLogo, navBarBackground } = classes;
  return (
    <nav className={`${navBar} ${hasBackground ? navBarBackground : ""}`}>
      <Link className={navBarLogo} to="/">
        <MainLogoSVG className={mainLogo} />

        <h2 className={logoName}>Jane's Bakes</h2>
      </Link>

      <CartButton />
    </nav>
  );
};

export default TopNavBar;

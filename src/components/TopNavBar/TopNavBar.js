import classes from "./TopNavBar.module.css";

import MainLogoSVG from "../UI/MainLogoSVG";
import CartButton from "../CartButton/CartButton";

const TopNavBar = function ({ hasBackground = false }) {
  const { navBar, navBarLogo, logoName, mainLogo, navBarBackground } = classes;
  return (
    <nav className={`${navBar} ${hasBackground ? navBarBackground : ""}`}>
      <div className={navBarLogo}>
        <MainLogoSVG className={mainLogo} />
        <h2 className={logoName}>Jane's Bakes</h2>
      </div>
      <CartButton />
    </nav>
  );
};

export default TopNavBar;

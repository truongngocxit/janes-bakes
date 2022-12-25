import classes from "./Footer.module.css";
import MainLogoSVG from "../UI/MainLogoSVG";

const Footer = function () {
  const {
    footerContainer,
    logoSection,
    navSection,
    otherChannelsSection,
    footerLogo,
    copyrightSection,
    nav,
    navItem,
  } = classes;
  return (
    <div className={footerContainer}>
      <div className={logoSection}>
        <MainLogoSVG className={footerLogo} />
        <h2>Jane's Bakes</h2>
      </div>
      <nav className={navSection}>
        <h3 className={nav}>Navigations</h3>
        <ul>
          <li>
            <a href="#" className={navItem}>
              All cakes
            </a>
          </li>
          <li>
            <a href="#" className={navItem}>
              Checkout
            </a>
          </li>
          <li>
            <a href="#" className={navItem}>
              About me
            </a>
          </li>
        </ul>
      </nav>
      <nav className={otherChannelsSection}>
        <h3>Other Channels</h3>
      </nav>
      <div className={copyrightSection}>
        <p>©2022, Jane's Bakes. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;

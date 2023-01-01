import classes from "./BaseFooter.module.css";
import MainLogoSVG from "../UI/MainLogoSVG";
import Instagram from "../UI/InstagramSVG";
import Facebook from "../UI/FacebookSVG";
import FooterNavLink from "./FooterNavLink";
import { useDispatch } from "react-redux";
import { footerActions } from "../../reduxStore/footer-display";
import { useContext } from "react";
import { darkModeContext } from "../../context/theme-context";

const Footer = function ({ addedFooterClassName }) {
  const { darkModeIsOn } = useContext(darkModeContext);
  const dispatch = useDispatch();
  const handleCloseFooter = function () {
    dispatch(footerActions.offFooter());
  };
  const {
    footerContainer,
    logoSection,
    navSection,
    otherChannelsSection,
    footerLogo,
    copyrightSection,
    navContainer,
    socialIcons,
    socialIcon,
    darkMode,
  } = classes;
  return (
    <div
      className={`${footerContainer} ${
        darkModeIsOn ? darkMode : ""
      } ${addedFooterClassName}`}
    >
      <div className={logoSection}>
        <MainLogoSVG className={footerLogo} />
        <h2>Jane Bakes</h2>
      </div>
      <nav className={navSection}>
        <h3>Navigations</h3>
        <ul className={navContainer}>
          <FooterNavLink
            to="/store"
            linkText="All cakes"
            onClick={handleCloseFooter}
          />
          <FooterNavLink
            to="/checkout"
            linkText="Checkout"
            onClick={handleCloseFooter}
          />
          <FooterNavLink
            to="/about"
            linkText="About me"
            onClick={handleCloseFooter}
          />
        </ul>
      </nav>
      <nav className={otherChannelsSection}>
        <h3>Other Channels</h3>
        <div className={socialIcons}>
          <a
            className={socialIcon}
            href="https://www.facebook.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Facebook />
          </a>
          <a
            className={socialIcon}
            href="https://www.instagram.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Instagram />
          </a>
        </div>
      </nav>
      <div className={copyrightSection}>
        <p>©2022, Jane's Bakes. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;

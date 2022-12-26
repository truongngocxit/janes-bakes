import classes from "./BaseFooter.module.css";
import MainLogoSVG from "../UI/MainLogoSVG";
import Instagram from "../UI/InstagramSVG";
import Facebook from "../UI/FacebookSVG";
import FooterNavLink from "./FooterNavLink";
import { useDispatch } from "react-redux";
import { footerActions } from "../../reduxStore/footer-display";

const Footer = function ({ addedFooterClassName }) {
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
  } = classes;
  return (
    <div className={`${footerContainer} ${addedFooterClassName}`}>
      <div className={logoSection}>
        <MainLogoSVG className={footerLogo} />
        <h2>Jane's Bakes</h2>
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
          <Facebook />
          <Instagram />
        </div>
      </nav>
      <div className={copyrightSection}>
        <p>©2022, Jane's Bakes. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;

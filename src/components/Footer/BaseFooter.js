import classes from "./BaseFooter.module.css";
import MainLogoSVG from "../UI/MainLogoSVG";
import Instagram from "../UI/InstagramSVG";
import Facebook from "../UI/FacebookSVG";
import FooterNavLink from "./FooterNavLink";

const Footer = function ({ addedFooterClassName }) {
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
          <FooterNavLink to="/store" linkText="All cakes" />
          <FooterNavLink to="/checkout" linkText="Checkout" />
          <FooterNavLink to="/about" linkText="About me" />
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

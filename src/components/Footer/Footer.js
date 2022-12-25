import classes from "./Footer.module.css";
import MainLogoSVG from "../UI/MainLogoSVG";
import Instagram from "../UI/InstagramSVG";
import Facebook from "../UI/FacebookSVG";
import CloseSVG from "../UI/CloseSVG";
import Overlay from "../UI/Overlay";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { footerActions } from "../../reduxStore/footer-display";
import { createPortal } from "react-dom";

const Footer = function () {
  const dispatch = useDispatch();
  const footerIsDisplay = useSelector(
    (state) => state.footerDisplay.footerDisplay
  );

  const handleCloseFooter = function () {
    console.log("close");
    dispatch(footerActions.offFooter());
  };

  const {
    footerContainer,
    logoSection,
    navSection,
    otherChannelsSection,
    footerLogo,
    copyrightSection,
    navHeading,
    navContainer,
    navItem,
    socialIcons,
    closeIcon,
    footerOn,
    footerOff,
  } = classes;
  return (
    <div
      className={`${footerContainer} ${footerIsDisplay ? footerOn : footerOff}`}
    >
      {/* Portal for Overlay */}
      {createPortal(
        <Overlay isDisplay={footerIsDisplay} />,
        document.getElementById("overlay-root")
      )}
      {/* End portal */}
      <CloseSVG className={closeIcon} onClick={handleCloseFooter} />
      <div className={logoSection}>
        <MainLogoSVG className={footerLogo} />
        <h2>Jane's Bakes</h2>
      </div>
      <nav className={navSection}>
        <h3 className={navHeading}>Navigations</h3>
        <ul className={navContainer}>
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
        <div className={socialIcons}>
          <Facebook className={socialIcons} />
          <Instagram className={socialIcons} />
        </div>
      </nav>
      <div className={copyrightSection}>
        <p>©2022, Jane's Bakes. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;

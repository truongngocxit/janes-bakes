import classes from "./About.module.css";
import NhuImage from "../../assets/nhu-photo.png";
import Earth from "../../components/UI/EarthSVG";
import Happy from "../../components/UI/HappySVG";
import Heart from "../../components/UI/HeartSVG";
import BaseFooter from "../../components/Footer/BaseFooter";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import { Fragment } from "react";

const About = function () {
  const {
    about,
    heroSection,
    missionsSection,
    ctaSection,
    heroDescription,
    heroImageContainer,
    missionItem,
    ctaText,
    ctaForm,
  } = classes;
  return (
    <div className={about}>
      <div className={heroSection}>
        <div className={heroDescription}>
          <h2>Hi! I'm Nhu</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className={heroImageContainer}>
          <img src={NhuImage} />
        </div>
      </div>
      <div className={missionsSection}>
        <h2>My Banking Philosophies</h2>
        <div className={missionItem}>
          <Heart />
          <h3>Love</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={missionItem}>
          <Happy />
          <h3>Quality</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={missionItem}>
          <Earth />
          <h3>Sustainable</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className={ctaSection}>
        <div className={ctaText}>
          <h2>Let's stay in touch</h2>
          <p>
            You will be the first to hear about my promotions and free giveaways
          </p>
        </div>
        <form className={ctaForm}>
          <input />
          <button>subcsribe</button>
        </form>
      </div>
    </div>
  );
};

export default About;

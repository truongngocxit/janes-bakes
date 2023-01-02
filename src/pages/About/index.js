import classes from "./About.module.css";
import NhuImage from "../../assets/nhu-photo.png";
import Earth from "../../components/UI/EarthSVG";
import Happy from "../../components/UI/HappySVG";
import Heart from "../../components/UI/HeartSVG";
import RightArrow from "../../components/UI/RightArrowSVG";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import { useState } from "react";
import useInput from "../../custom-hooks/use-input";
import MascotCTA from "../../components/UI/MascotCTA";

const About = function () {
  const {
    input: inputEmail,
    handleInputChange: handleEmailChange,
    handleInputIsTouched: handleEmailIsTouched,
    inputHasError: inputEmailHasError,
    inputIsInvalid: inputEmailIsInvalid,
  } = useInput((email) => !email.includes("@"));

  const [isSending, setSending] = useState(false);
  const [errorSending, setErrorSending] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const sendSubsriptionData = async function () {
    setSending(true);
    setErrorSending(null);
    try {
      const response = await fetch(
        "https://janes-bakes-default-rtdb.asia-southeast1.firebasedatabase.app/subscriptions.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: inputEmail,
            date: new Date().toLocaleDateString(),
          }),
        }
      );
      if (!response) throw new Error("Error sending data");
    } catch (error) {
      setErrorSending(error.message);
    }
    setSending(false);
    setHasSubmitted(true);
  };

  const handleSubmitEmailSubscription = function (event) {
    event.preventDefault();
    if (inputEmailHasError) return;
    (async function () {
      await sendSubsriptionData();
    })();
  };

  const {
    heroSection,
    missionsSection,
    ctaSection,
    heroDescription,
    heroImageContainer,
    missionItem,
    ctaText,
    ctaForm,
    aboutPage,
    rightArrow,
    invalidEmailMessage,
    subsriptionMessage,
    missionHeading,
    allMissionItems,
    ctaMascot,
    ctaMain,
  } = classes;
  return (
    <div className={aboutPage}>
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
          <img src={NhuImage} alt="My portrait" />
        </div>
      </div>
      <div className={missionsSection}>
        <div className={missionHeading}>
          <h2>My Baking Philosophies</h2>
        </div>
        <div className={allMissionItems}>
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
      </div>
      <div className={ctaSection}>
        <div className={ctaMascot}>
          <MascotCTA />
        </div>
        <div className={ctaMain}>
          <div className={ctaText}>
            <h2>Let's stay in touch</h2>

            <p>
              You will be the first to hear about my promotions and free
              giveaways
            </p>
          </div>
          {!isSending && !hasSubmitted && (
            <form className={ctaForm} onSubmit={handleSubmitEmailSubscription}>
              {inputEmailIsInvalid && (
                <p className={invalidEmailMessage}>Invalid email format</p>
              )}
              <input
                required
                value={inputEmail}
                onChange={handleEmailChange}
                onBlur={handleEmailIsTouched}
              />
              <button type="submit">
                <RightArrow className={rightArrow} />
              </button>
            </form>
          )}
          {isSending && <LoadingSpinner color="#fff" />}
          {!isSending && errorSending && (
            <p className={subsriptionMessage}>
              Error sending data. Please try again.
            </p>
          )}
          {!isSending && hasSubmitted && (
            <p className={subsriptionMessage}>
              Thank you for submitting :{")"}.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;

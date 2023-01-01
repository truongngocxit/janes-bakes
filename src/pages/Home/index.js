import classes from "./Home.module.css";
import GeneralButton from "../../components/GeneralButton/GeneralButton";
import ImagesCarousel from "../../components/ImageCarousel/ImagesCarousel";
import RadialCirle from "../../components/UI/RadialCircle";

const Home = function () {
  const { homePage, homeHeading, btnsContainer, homeMain, shopBtn, aboutBtn } =
    classes;
  return (
    <div className={homePage}>
      <RadialCirle x="50" y="30" size="30" />
      <RadialCirle x="5" y="50" size="20" />
      <RadialCirle x="80" y="10" size="20" />

      <div className={homeMain}>
        <h1 className={homeHeading}>Bake with Love</h1>
        <div className={btnsContainer}>
          <GeneralButton to="store" type="large" className={shopBtn}>
            Shop now
          </GeneralButton>
          <GeneralButton
            to="about"
            isMainBtn={false}
            type="large"
            className={aboutBtn}
          >
            About me
          </GeneralButton>
        </div>
      </div>

      <ImagesCarousel />
    </div>
  );
};

export default Home;

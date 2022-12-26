import classes from "./Home.module.css";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import GeneralButton from "../../components/GeneralButton/GeneralButton";
import ImagesCarousel from "../../components/ImageCarousel/ImagesCarousel";
import RadialCirle from "../../components/UI/RadialCircle";

const Home = function () {
  console.log("Render home");
  const { home, homeMain, homeHeading, btnsContainer, homeMainContent } =
    classes;
  return (
    <div className={home}>
      <RadialCirle x="50" y="30" size="30" />
      <RadialCirle x="5" y="50" size="20" />
      <RadialCirle x="80" y="10" size="20" />

      <div className={homeMainContent}>
        <h1 className={homeHeading}>Bake with Love</h1>
        <div className={btnsContainer}>
          <GeneralButton to="store">Shop now</GeneralButton>
          <GeneralButton to="about" isMainBtn={false}>
            About me
          </GeneralButton>
        </div>
      </div>

      <ImagesCarousel />
    </div>
  );
};

export default Home;

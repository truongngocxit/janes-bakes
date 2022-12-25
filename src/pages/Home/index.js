import classes from "./Home.module.css";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import GeneralButton from "../../components/GeneralButton/GeneralButton";
import ImagesCarousel from "../../components/ImageCarousel/ImagesCarousel";
import BottomNavBar from "../../components/BottomNavBar/BottomNavBar";
import RadialCirle from "../../components/UI/RadialCircle";
import Footer from "../../components/Footer/Footer";

const Home = function () {
  const { home, homeMain, homeHeading, btnsContainer, homeMainContent } =
    classes;
  return (
    <div className={home}>
      <RadialCirle x="50" y="30" size="30" />
      <RadialCirle x="5" y="50" size="20" />
      <RadialCirle x="80" y="10" size="20" />
      <TopNavBar />
      <main className={homeMain}>
        <div className={homeMainContent}>
          <h1 className={homeHeading}>Bake with Love</h1>
          <div className={btnsContainer}>
            <GeneralButton>Shop now</GeneralButton>
            <GeneralButton isMainBtn={false}>About me</GeneralButton>
          </div>
        </div>
      </main>
      <ImagesCarousel />
      <BottomNavBar />
      <Footer />
    </div>
  );
};

export default Home;

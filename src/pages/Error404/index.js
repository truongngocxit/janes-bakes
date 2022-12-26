import classes from "./Error404.module.css";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import GeneralButton from "../../components/GeneralButton/GeneralButton";
import ImagesCarousel from "../../components/ImageCarousel/ImagesCarousel";
import BottomNavBar from "../../components/BottomNavBar/BottomNavBar";
import RadialCirle from "../../components/UI/RadialCircle";
import PopupFooter from "../../components/Footer/PopupFooter";

const Error404 = function () {
  const {
    errorPage,
    errorMain,
    errorHeading,
    btnsContainer,
    errorMainContent,
  } = classes;
  return (
    <div className={errorPage}>
      <RadialCirle x="50" y="30" size="30" />
      <RadialCirle x="5" y="50" size="20" />
      <RadialCirle x="80" y="10" size="20" />
      <TopNavBar />
      <main className={errorMain}>
        <div className={errorMainContent}>
          <h1 className={errorHeading}>Not all who wander are lost</h1>
          <p>...except those who come to this 404 page</p>
          <div className={btnsContainer}>
            <GeneralButton to="store">Go back home</GeneralButton>
            <a href="#">
              Or you will be navigated automatically after 5 seconds...
            </a>
          </div>
        </div>
      </main>

      <BottomNavBar />
      <PopupFooter />
    </div>
  );
};

export default Error404;

import classes from "./CarouselItem.module.css";
import RightArrowSVG from "../UI/RightArrowSVG";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { darkModeContext } from "../../context/theme-context";

const CarouselItem = function ({ carouselImageSrc, cakeName, to }) {
  const { darkModeIsOn } = useContext(darkModeContext);
  const navigate = useNavigate();
  const {
    carouselItemContainer,
    carouselItemImage,
    carouselItemName,
    rightArrow,
    darkMode,
  } = classes;

  const handleNavigateToCategory = function () {
    navigate(`/store?tag=${to}`, {
      state: { tag: to },
    });
  };
  return (
    <div
      className={`${carouselItemContainer} ${darkModeIsOn ? darkMode : ""}`}
      onClick={handleNavigateToCategory}
    >
      <img
        className={carouselItemImage}
        src={carouselImageSrc}
        loading="lazy"
        alt={carouselItemName}
      />
      <p className={carouselItemName}>{cakeName}</p>
      <RightArrowSVG className={rightArrow} />
    </div>
  );
};

export default CarouselItem;

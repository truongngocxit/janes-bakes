import classes from "./CarouselItem.module.css";
import RightArrowSVG from "../UI/RightArrowSVG";

const CarouselItem = function ({ carouselImageSrc, cakeName }) {
  const {
    carouselItemContainer,
    carouselItemImage,
    carouselItemName,
    rightArrow,
  } = classes;
  return (
    <div className={carouselItemContainer}>
      <img
        className={carouselItemImage}
        src={carouselImageSrc}
        loading="lazy"
      />
      <p className={carouselItemName}>{cakeName}</p>
      <RightArrowSVG className={rightArrow} />
    </div>
  );
};

export default CarouselItem;

import classes from "./CarouselItem.module.css";
import RightArrowSVG from "../UI/RightArrowSVG";
import { Link } from "react-router-dom";

const CarouselItem = function ({ carouselImageSrc, cakeName, to }) {
  console.log(to);
  const {
    carouselItemContainer,
    carouselItemImage,
    carouselItemName,
    rightArrow,
  } = classes;
  return (
    <Link className={carouselItemContainer} to={`/store?tag=cheesecake`}>
      <img
        className={carouselItemImage}
        src={carouselImageSrc}
        loading="lazy"
        alt={carouselItemName}
      />
      <p className={carouselItemName}>{cakeName}</p>
      <RightArrowSVG className={rightArrow} />
    </Link>
  );
};

export default CarouselItem;

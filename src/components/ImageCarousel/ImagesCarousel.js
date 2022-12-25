import classes from "./ImagesCarousel.module.css";
import CarouselItem from "./CarouselItem";
import BirthdayCakeImage from "../../assets/birthday.jpg";
import CheeseCakeImage from "../../assets/cheesecake.jpg";
import ChocolateCakeImage from "../../assets/chocolate.jpg";
import ChouxImage from "../../assets/choux.jpg";

const ImagesCarousel = function () {
  console.log(BirthdayCakeImage);
  const { carouselContainer } = classes;
  return (
    <div className={carouselContainer}>
      <CarouselItem
        carouselImageSrc={BirthdayCakeImage}
        cakeName="Birthday Cake"
      />
      <CarouselItem carouselImageSrc={CheeseCakeImage} cakeName="Cheesecake" />
      <CarouselItem
        carouselImageSrc={ChocolateCakeImage}
        cakeName="Chocolate Mousse"
      />
      <CarouselItem carouselImageSrc={ChouxImage} cakeName="Choux Puff" />
    </div>
  );
};

export default ImagesCarousel;

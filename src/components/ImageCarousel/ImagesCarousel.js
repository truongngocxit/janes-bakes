import classes from "./ImagesCarousel.module.css";
import CarouselItem from "./CarouselItem";
import BirthdayCakeImage from "../../assets/birthday.jpg";
import CheeseCakeImage from "../../assets/cheesecake.jpg";
import ChocolateCakeImage from "../../assets/chocolate.jpg";
import ChouxImage from "../../assets/choux.jpg";
import { useEffect, useState } from "react";

const ImagesCarousel = function () {
  const [cakeCategories, setCakeCategories] = useState([]);
  useEffect(() => {
    const fetchCakeCategories = async function () {
      const response = await fetch(
        "https://janes-bakes-default-rtdb.asia-southeast1.firebasedatabase.app/categories.json"
      );

      const data = await response.json();

      const cleansedData = Object.entries(data).map((entry) => ({
        id: entry[0],
        ...entry[1],
      }));

      setCakeCategories(cleansedData);
    };

    fetchCakeCategories();
  }, []);
  const { carouselContainer } = classes;
  return (
    <div className={carouselContainer}>
      {cakeCategories.map((cat) => (
        <CarouselItem
          carouselImageSrc={cat.url}
          cakeName={cat.name}
          key={cat.id}
          to={cat.tag}
        />
      ))}
    </div>
  );
};

export default ImagesCarousel;

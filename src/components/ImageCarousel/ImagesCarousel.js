import classes from "./ImagesCarousel.module.css";
import CarouselItem from "./CarouselItem";
import LoadingSpinner from "../UI/LoadingSpinner";
import { useEffect, useState } from "react";

const ImagesCarousel = function () {
  const [cakeCategories, setCakeCategories] = useState([]);
  const [requestError, setRequestError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCakeCategories = async function () {
    setRequestError(null);
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://janes-bakes-default-rtdb.asia-southeast1.firebasedatabase.app/categories.json"
      );

      if (!response.ok) throw new Error("Failed to fetch data");

      const data = await response.json();

      const cleansedData = Object.entries(data).map((entry) => ({
        id: entry[0],
        ...entry[1],
      }));

      setCakeCategories(cleansedData);
    } catch (error) {
      setRequestError(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCakeCategories();
  }, []);

  const { carouselContainer, exception } = classes;

  let content;

  if (isLoading) {
    content = <LoadingSpinner className={exception} />;
  } else if (!isLoading && requestError) {
    content = (
      <p className={exception}>
        {requestError}. Please <span onClick={fetchCakeCategories}>reload</span>
      </p>
    );
  } else if (!isLoading && !requestError) {
    content = cakeCategories.map((cat) => (
      <CarouselItem
        carouselImageSrc={cat.url}
        cakeName={cat.name}
        key={cat.id}
        to={cat.tag}
      />
    ));
  }

  return <div className={carouselContainer}>{content}</div>;
};

export default ImagesCarousel;

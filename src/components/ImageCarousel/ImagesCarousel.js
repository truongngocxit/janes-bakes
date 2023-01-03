import classes from "./ImagesCarousel.module.css";
import CarouselItem from "./CarouselItem";
import LoadingSpinner from "../UI/LoadingSpinner";
import { useEffect, useCallback, useState } from "react";
import useFetch from "../../custom-hooks/use-fetch";

const ImagesCarousel = function () {
  const [cakeCategories, setCakeCategories] = useState([]);
  const { isLoading, error: requestError, fetchData } = useFetch();

  const fetchCakeCategories = useCallback(
    async function () {
      const returnedData = await fetchData(
        "https://janes-bakes-default-rtdb.asia-southeast1.firebasedatabase.app/categories.json",
        "Failed to fetch data"
      );

      const cleansedData = Object.entries(returnedData).map((entry) => ({
        id: entry[0],
        ...entry[1],
      }));
      setCakeCategories(cleansedData);
    },
    [fetchData]
  );

  useEffect(() => {
    fetchCakeCategories();
  }, [fetchCakeCategories]);

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

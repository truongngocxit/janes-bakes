import classes from "./StoreFront.module.css";
import StoreItem from "../StoreItem/StoreItem";
import LoadingSpinner from "../UI/LoadingSpinner";
import { useState, useEffect } from "react";

const StoreFront = function ({ letterFilter, tagFilter }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const requestStoreItems = async function () {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://janes-bakes-default-rtdb.asia-southeast1.firebasedatabase.app/productImages.json`
        );

        if (!response.ok)
          throw new Error("Failed loading data 😭. Please retry😉");
        const data = await response.json();

        const cleansedData = Object.entries(data).map((entry) => ({
          id: entry[0],
          ...entry[1],
        }));

        setProducts(cleansedData);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    requestStoreItems();
  }, []);

  const { storeFront, message } = classes;

  if (isLoading) {
    return (
      <div className={message}>
        <LoadingSpinner />
      </div>
    );
  }
  if (!isLoading && error) {
    return <div className={message}>error</div>;
  }

  const filteredProducts = products
    .filter(
      (p) =>
        p.name.toLowerCase().includes(letterFilter) ||
        p.tag.includes(letterFilter)
    )
    .filter((p) => {
      if (tagFilter === "all") return p;
      else {
        return p.tag === tagFilter;
      }
    });

  if (!isLoading && !error && filteredProducts.length === 0) {
    return <div className={message}>No content found</div>;
  }

  if (!isLoading && !error && filteredProducts.length > 0) {
    return (
      <ul className={storeFront}>
        {filteredProducts.map((p) => (
          <StoreItem key={p.id} {...p} />
        ))}
      </ul>
    );
  }
};

export default StoreFront;

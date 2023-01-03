import classes from "./StoreFront.module.css";
import StoreItem from "../StoreItem/StoreItem";
import LoadingSpinner from "../UI/LoadingSpinner";
import SadFace from "../UI/SadFace";
import { useEffect, useState } from "react";
import useFetch from "../../custom-hooks/use-fetch";

const StoreFront = function ({ letterFilter, tagFilter }) {
  const [products, setProducts] = useState([]);

  const { isLoading, error, fetchData } = useFetch();

  useEffect(() => {
    (async function () {
      const returnedData = await fetchData(
        "https://janes-bakes-default-rtdb.asia-southeast1.firebasedatabase.app/productImages.json",
        "Failed loading data 😭. Please retry😉"
      );

      const cleansedData = Object.entries(returnedData).map((entry) => ({
        id: entry[0],
        ...entry[1],
      }));
      setProducts(cleansedData);
    })();
  }, [fetchData]);

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
        p.name.toLowerCase().includes(letterFilter.toLowerCase()) ||
        p.tag.includes(letterFilter.toLowerCase())
    )
    .filter((p) => {
      if (tagFilter === "all") return p;
      else {
        return p.tag === tagFilter;
      }
    });

  if (!isLoading && !error && filteredProducts.length === 0) {
    return (
      <div className={message}>
        <SadFace />
        <p>No cakes found. Please try another query ;{")"}</p>
      </div>
    );
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

import classes from "./Store.module.css";
import SearchForm from "../../components/SearchForm.js/SearchForm";
import StoreFilter from "../../components/StoreFilter/StoreFilter";
import StoreFront from "../../components/StoreFront/StoreFront";
import { useLocation } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { darkModeContext } from "../../context/theme-context";

const Store = function () {
  const { state } = useLocation();
  const { darkModeIsOn } = useContext(darkModeContext);
  const [letterQuery, setLetterQuery] = useState("");
  const [tagQuery, setTagQuery] = useState(state?.tag || "all");
  // START FETCH
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

  //END FETCH
  const {
    storePage,
    storeMenu,
    storeFront,
    searchForm,
    filterSection,
    filterSelect,
    darkMode,
  } = classes;
  return (
    <div className={storePage}>
      <menu className={`${storeMenu} ${darkModeIsOn ? darkMode : ""}`}>
        <div className={searchForm}>
          <SearchForm
            filterByLetter={setLetterQuery}
            filterValue={letterQuery}
          />
        </div>
        <div className={filterSection}>
          <StoreFilter
            filterByTag={setTagQuery}
            tagValue={tagQuery}
            className={filterSelect}
            products={products}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </menu>
      <div className={storeFront}>
        <StoreFront
          letterFilter={letterQuery}
          tagFilter={tagQuery}
          products={products}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </div>
  );
};

export default Store;

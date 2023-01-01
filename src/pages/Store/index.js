import classes from "./Store.module.css";
import SearchForm from "../../components/SearchForm.js/SearchForm";
import StoreFilter from "../../components/StoreFilter/StoreFilter";
import StoreFront from "../../components/StoreFront/StoreFront";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Store = function () {
  const { state } = useLocation();

  const [letterQuery, setLetterQuery] = useState("");
  const [tagQuery, setTagQuery] = useState(state?.tag || "all");

  const {
    storeContainer,
    storeMenu,
    storeFront,
    searchForm,
    filterSection,
    filterSelect,
  } = classes;
  return (
    <div className={storeContainer}>
      <menu className={storeMenu}>
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
          />
        </div>
      </menu>
      <div className={storeFront}>
        <StoreFront letterFilter={letterQuery} tagFilter={tagQuery} />
      </div>
    </div>
  );
};

export default Store;

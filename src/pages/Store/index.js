import classes from "./Store.module.css";
import SearchForm from "../../components/SearchForm.js/SearchForm";
import StoreFilter from "../../components/StoreFilter/StoreFilter";
import StoreFront from "../../components/StoreFront/StoreFront";
import { useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { darkModeContext } from "../../context/theme-context";

const Store = function () {
  const { state } = useLocation();
  const { darkModeIsOn } = useContext(darkModeContext);
  const [letterQuery, setLetterQuery] = useState("");
  const [tagQuery, setTagQuery] = useState(state?.tag || "all");
  // START FETCH

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

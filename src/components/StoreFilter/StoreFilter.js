import classes from "./StoreFilter.module.css";
import CosmeticEffect from "./CosmeticEffect";
import { useNavigate } from "react-router-dom";
import Filter from "../UI/FilterSVG";
import { useState, useContext, useEffect } from "react";
import Overlay from "../UI/Overlay";
import { darkModeContext } from "../../context/theme-context";
import FilterItem from "./FilterItem";
import LoadingSpinner from "../UI/LoadingSpinner";
import useFetch from "../../custom-hooks/use-fetch";

const StoreFilter = function ({ tagValue, filterByTag, className }) {
  const { darkModeIsOn } = useContext(darkModeContext);
  const navigate = useNavigate();
  const [filterListIsOpen, setFilterListIsOpen] = useState(false);
  const [filters, setFilters] = useState([]);
  const { isLoading, error: requestError, fetchData } = useFetch();

  useEffect(() => {
    (async function () {
      const returnedData = await fetchData(
        "https://janes-bakes-default-rtdb.asia-southeast1.firebasedatabase.app/categories.json",
        "Error fetching data"
      );

      const cleansedData = Object.entries(returnedData).map((entry) => ({
        id: entry[0],
        ...entry[1],
      }));
      setFilters(cleansedData);
    })();
  }, [fetchData]);

  const handleToggleFilterList = function () {
    setFilterListIsOpen((prevState) => !prevState);
  };
  const handleCloseFilterList = function () {
    setFilterListIsOpen(false);
  };
  const handleSelectFilter = function (event) {
    filterByTag(event.target.value);
    navigate(`?tag=${event.target.value}`);
  };

  const {
    filterList,
    filterIcon,
    filterListOpen,
    filterListClosed,
    filterItem,
    loadingSpinner,
    errorMessage,
    darkMode,
  } = classes;

  const allFilters = [
    {
      id: "00",
      name: "All",
      tag: "all",
    },
    ...filters,
  ];

  return (
    <>
      <div className={filterIcon} onClick={handleToggleFilterList}>
        <Filter />
      </div>

      <form
        className={`${filterList} ${className} ${
          darkModeIsOn ? darkMode : ""
        } ${filterListIsOpen ? filterListOpen : filterListClosed}`}
      >
        {isLoading && <LoadingSpinner className={loadingSpinner} />}
        {!isLoading && requestError && (
          <p className={errorMessage}>Error loading data</p>
        )}
        {filters.length > 0 && !isLoading && (
          <CosmeticEffect
            position={allFilters.findIndex((f) => f.tag === tagValue)}
            allFilters={allFilters}
          />
        )}
        {filters.length > 0 &&
          !isLoading &&
          allFilters.map((f) => (
            <FilterItem
              key={f.id}
              label={f.name}
              name={f.tag}
              checkedFilter={tagValue}
              onChange={handleSelectFilter}
              onClick={handleCloseFilterList}
              className={`${filterItem}`}
              darkModeIsOn={darkModeIsOn}
            />
          ))}
      </form>
      {filterListIsOpen && <Overlay onClick={handleToggleFilterList} />}
    </>
  );
};

export default StoreFilter;

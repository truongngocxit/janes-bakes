import classes from "./StoreFilter.module.css";
import CosmeticEffect from "./CosmeticEffect";
import { useNavigate } from "react-router-dom";
import Filter from "../UI/FilterSVG";
import { useState, useContext, useEffect } from "react";
import Overlay from "../UI/Overlay";
import { darkModeContext } from "../../context/theme-context";
import FilterItem from "./FilterItem";
import LoadingSpinner from "../UI/LoadingSpinner";

const StoreFilter = function ({ tagValue, filterByTag, className }) {
  const { darkModeIsOn } = useContext(darkModeContext);
  const navigate = useNavigate();
  const [filterListIsOpen, setFilterListIsOpen] = useState(false);
  const [filters, setFilters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [requestError, setRequestError] = useState(null);

  useEffect(() => {
    const fetchFilterData = async function () {
      setIsLoading(true);
      setRequestError(null);
      try {
        const response = await fetch(
          "https://janes-bakes-default-rtdb.asia-southeast1.firebasedatabase.app/categories.json"
        );

        if (!response.ok) throw new Error("Error fetching data");
        const data = await response.json();

        const cleansedData = Object.entries(data).map((entry) => ({
          id: entry[0],
          ...entry[1],
        }));
        setFilters(cleansedData);
      } catch (error) {
        setRequestError(error.message);
      }
      setIsLoading(false);
    };

    fetchFilterData();
  }, []);

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

// const allFilters = [
//   { name: "all", label: "All" },
//   { name: "cheesecake", label: "Cheesecakes" },
//   { name: "cookies", label: "Cookies" },
//   { name: "seasonal", label: "Seasonal" },
//   { name: "others", label: "Others" },
// ];

// const CosmeticEffect = function ({ position }) {
//   const { cosmetic } = classes;
//   return (
//     <div
//       className={cosmetic}
//       style={{
//         transform: `translateY(${position * 100}%)`,
//         height: `${100 / allFilters.length}%`,
//       }}
//     ></div>
//   );
// };

// const FilterItem = function ({
//   label,
//   name,
//   checkedFilter,
//   onChange,
//   onClick,
//   className,
// }) {
//   const { darkModeIsOn } = useContext(darkModeContext);
//   const { cakeIcon, filterLabel, filterItemActive, filterItem, darkMode } =
//     classes;
//   return (
//     <div
//       className={`${filterItem} ${darkModeIsOn ? darkMode : ""} ${
//         checkedFilter === name ? filterItemActive : ""
//       }`}
//       onClick={onClick}
//     >
//       <label className={filterLabel} htmlFor={name}>
//         <input
//           type="radio"
//           name="cakeFilter"
//           value={name}
//           id={name}
//           checked={checkedFilter === { name }}
//           onChange={onChange}
//         />
//         <Cake className={cakeIcon} />
//         <span>{label}</span>
//       </label>
//     </div>
//   );
// };

import classes from "./StoreFilter.module.css";
import Cake from "../UI/CakeSVG";
import { useNavigate } from "react-router-dom";
import Filter from "../UI/FilterSVG";
import { useState } from "react";
import Overlay from "../UI/Overlay";
import { useContext } from "react";
import { darkModeContext } from "../../context/theme-context";

const StoreFilter = function ({ tagValue, filterByTag, className }) {
  const navigate = useNavigate();
  const [filterListIsOpen, setFilterListIsOpen] = useState(false);
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
    darkMode,
  } = classes;

  return (
    <>
      <div className={filterIcon} onClick={handleToggleFilterList}>
        <Filter />
      </div>

      <form
        className={`${filterList} ${className} ${
          filterListIsOpen ? filterListOpen : filterListClosed
        }`}
      >
        <CosmeticEffect
          position={allFilters.findIndex((f) => f.name === tagValue)}
        />
        {allFilters.map((f) => (
          <FilterItem
            key={f.name}
            label={f.label}
            name={f.name}
            checkedFilter={tagValue}
            onChange={handleSelectFilter}
            onClick={handleCloseFilterList}
            className={`${filterItem}`}
          />
        ))}
      </form>
      {filterListIsOpen && <Overlay onClick={handleToggleFilterList} />}
    </>
  );
};

export default StoreFilter;

const allFilters = [
  { name: "all", label: "All" },
  { name: "cheesecake", label: "Cheesecakes" },
  { name: "cookies", label: "Cookies" },
  { name: "seasonal", label: "Seasonal" },
  { name: "others", label: "Others" },
];

const CosmeticEffect = function ({ position }) {
  const { cosmetic } = classes;
  return (
    <div
      className={cosmetic}
      style={{
        transform: `translateY(${position * 100}%)`,
        height: `${100 / allFilters.length}%`,
      }}
    ></div>
  );
};

const FilterItem = function ({
  label,
  name,
  checkedFilter,
  onChange,
  onClick,
  className,
}) {
  const { darkModeIsOn } = useContext(darkModeContext);
  const { cakeIcon, filterLabel, filterItemActive, filterItem, darkMode } =
    classes;
  return (
    <div
      className={`${filterItem} ${darkModeIsOn ? darkMode : ""} ${
        checkedFilter === name ? filterItemActive : ""
      }`}
      onClick={onClick}
    >
      <label className={filterLabel} htmlFor={name}>
        <input
          type="radio"
          name="cakeFilter"
          value={name}
          id={name}
          checked={checkedFilter === { name }}
          onChange={onChange}
        />
        <Cake className={cakeIcon} />
        <span>{label}</span>
      </label>
    </div>
  );
};

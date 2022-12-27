import classes from "./StoreFilter.module.css";
import Cake from "../UI/CakeSVG";

const StoreFilter = function ({ filterByTag, tagValue }) {
  const handleSelectFilter = function (event) {
    filterByTag(event.target.value);
  };

  const { filterList } = classes;

  return (
    <form className={filterList}>
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
        />
      ))}
    </form>
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

const FilterItem = function ({ label, name, checkedFilter, onChange }) {
  const { filterItem, cakeIcon, filterLabel, filterItemActive } = classes;
  return (
    <div
      className={`${filterItem} ${
        checkedFilter === name ? filterItemActive : ""
      }`}
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

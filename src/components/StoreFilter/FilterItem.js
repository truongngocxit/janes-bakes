import classes from "./FilterItem.module.css";
import Cake from "../UI/CakeSVG";

const FilterItem = function ({
  label,
  name,
  checkedFilter,
  onChange,
  onClick,
  darkModeIsOn,
}) {
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

export default FilterItem;

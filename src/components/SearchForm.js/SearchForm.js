import classes from "./SearchForm.module.css";
import MagGlass from "../UI/MagGlass";
import { useContext } from "react";
import { darkModeContext } from "../../context/theme-context";

const SearchForm = function ({ filterByLetter, filterValue }) {
  const { darkModeIsOn } = useContext(darkModeContext);
  const handleSearchQueryChange = function (event) {
    filterByLetter(event.target.value);
  };
  const { formContainer, magGlass, darkMode } = classes;
  return (
    <form className={`${formContainer} ${darkModeIsOn ? darkMode : ""}`}>
      <button>
        <MagGlass className={magGlass} />
      </button>
      <input onChange={handleSearchQueryChange} value={filterValue} />
    </form>
  );
};

export default SearchForm;

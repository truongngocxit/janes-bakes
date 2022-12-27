import classes from "./SearchForm.module.css";
import MagGlass from "../UI/MagGlass";

const SearchForm = function ({ filterByLetter, filterValue }) {
  const handleSearchQueryChange = function (event) {
    filterByLetter(event.target.value);
  };
  const { formContainer, magGlass } = classes;
  return (
    <form className={formContainer}>
      <button>
        <MagGlass className={magGlass} />
      </button>
      <input onChange={handleSearchQueryChange} value={filterValue} />
    </form>
  );
};

export default SearchForm;

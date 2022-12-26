import classes from "./SearchForm.module.css";
import MagGlass from "../UI/MagGlass";

const SearchForm = function () {
  const { formContainer, magGlass } = classes;
  return (
    <form className={formContainer}>
      <button>
        <MagGlass className={magGlass} />
      </button>
      <input />
    </form>
  );
};

export default SearchForm;

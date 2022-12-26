import TopNavBar from "../../components/TopNavBar/TopNavBar";
import classes from "./Store.module.css";
import SearchForm from "../../components/SearchForm.js/SearchForm";
import Cake from "../../components/UI/CakeSVG";
import Hamburger from "../../components/UI/HamburgetSVG";
import ThemeButton from "../../components/ThemeButton/ThemeButton";
import PopupFooter from "../../components/Footer/PopupFooter";
import { useDispatch } from "react-redux";
import { footerActions } from "../../reduxStore/footer-display";
import StoreItem from "../../components/StoreItem/StoreItem";

const Store = function () {
  const dispatch = useDispatch();

  const handleOpenFooter = function () {
    dispatch(footerActions.onFooter());
  };

  const {
    store,
    storeContainer,
    storeMenu,
    storeFront,
    filterList,
    filterItem,
    cakeIcon,
  } = classes;
  return (
    <div className={storeContainer}>
      <menu className={storeMenu}>
        <SearchForm />
        <ul className={filterList}>
          <li className={filterItem}>
            <Cake className={cakeIcon} />
            <a href="#">All</a>
          </li>
          <li className={filterItem}>
            <Cake className={cakeIcon} />
            <a href="#">Cheese cakes</a>
          </li>
          <li className={filterItem}>
            <Cake className={cakeIcon} />
            <a href="#">Birthday cakes</a>
          </li>
          <li className={filterItem}>
            <Cake className={cakeIcon} />
            <a href="#">Others</a>
          </li>
        </ul>
      </menu>
      <div className={storeFront}>
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
      </div>
    </div>
  );
};

export default Store;

import CartSVG from "../UI/CartSVG";
import classes from "./CartButton.module.css";
import { Link } from "react-router-dom";

const CartButton = function () {
  const { cartBtnContainer, cartIcon } = classes;
  return (
    <Link to="/store" className={cartBtnContainer}>
      <CartSVG className={cartIcon} />
    </Link>
  );
};

export default CartButton;

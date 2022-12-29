import CartSVG from "../UI/CartSVG";
import classes from "./CartButton.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CartButton = function () {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const { cartBtnContainer, cartIcon, cartNotification } = classes;
  return (
    <Link to="/store" className={cartBtnContainer}>
      <div className={cartNotification}>
        <span>{cartQuantity}</span>
      </div>
      <CartSVG className={cartIcon} />
    </Link>
  );
};

export default CartButton;

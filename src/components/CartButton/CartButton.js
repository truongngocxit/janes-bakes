import CartSVG from "../UI/CartSVG";
import classes from "./CartButton.module.css";

const CartButton = function () {
  const { cartBtnContainer, cartIcon } = classes;
  return (
    <div className={cartBtnContainer}>
      <a href="#">
        <CartSVG className={cartIcon} />
      </a>
    </div>
  );
};

export default CartButton;

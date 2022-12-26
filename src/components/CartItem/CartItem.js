import classes from "./CartItem.module.css";
import CheeseCake from "../../assets/product-images/cheesecake-product.jpg";

const CartItem = function () {
  const { cartItem, cartItemImage, cartItemInfo, cartItemPrice } = classes;
  return (
    <div className={cartItem}>
      <div className={cartItemImage}>
        <img src={CheeseCake} />
      </div>
      <div className={cartItemInfo}>
        <h3>Strawberry cheesecake</h3>
        <p>Lorem ipsum dolor sit amet, consecteturd </p>
      </div>
      <div className={cartItemPrice}>
        <h3>$25.99</h3>
        <p>x1</p>
        <a href="#">Edit</a>
      </div>
    </div>
  );
};

export default CartItem;

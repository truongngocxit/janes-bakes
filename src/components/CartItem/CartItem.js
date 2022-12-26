import classes from "./CartItem.module.css";
import CheeseCake from "../../assets/product-images/cheesecake-product.jpg";

const CartItem = function () {
  const { cartItem } = classes;
  return (
    <div className={cartItem}>
      <div>
        <img src={<CheeseCake />} />
      </div>
      <div>
        <h3>Strawberry cheesecake</h3>
        <p>Lorem ipsum dolor sit amet, consectetur </p>
        <p>x1</p>
      </div>
      <div>
        <p>$25.99</p>
        <a href="#">Edit</a>
      </div>
    </div>
  );
};

export default CartItem;

import classes from "./CartSummary.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import SadFace from "../UI/SadFace";
import { Link } from "react-router-dom";

const CartSummary = function ({ className }) {
  const { cartSummary, emptyCartMessage } = classes;
  const items = useSelector((state) => state.cart.items);
  return (
    <>
      <div className={`${cartSummary} ${className}`}>
        {items.length > 0 &&
          items.map((i) => (
            <CartItem
              key={i.id}
              name={i.name}
              url={i.url}
              id={i.id}
              price={i.price}
              description={i.description}
              totalPrice={i.quantity * i.price}
              quantity={i.quantity}
            />
          ))}

        {items.length === 0 && (
          <div className={emptyCartMessage}>
            <SadFace />
            <p>Cart is empty. Please add something</p>
            <Link to="/store">🛒 Go to store</Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSummary;

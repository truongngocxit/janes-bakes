import classes from "./Checkout.module.css";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import ChevronLeft from "../../components/UI/ChevronLeft";
import CartSummary from "../../components/CartItem/CartSummary";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SadFace from "../../components/UI/SadFace";

const Checkout = function () {
  const items = useSelector((state) => state.cart.items);
  const {
    checkout,
    checkoutContainer,
    checkoutFormContainer,
    cartSummaryHeading,
    backLink,
    emptyCartMessage,
  } = classes;
  return (
    <div className={checkout}>
      {items.length > 0 && (
        <div className={checkoutContainer}>
          <div>
            <Link to="/store" className={backLink}>
              <ChevronLeft />
              <span>Back to Shopping</span>
            </Link>
            <h1 className={cartSummaryHeading}>Your Cart</h1>
            <CartSummary />
          </div>
          <div className={checkoutFormContainer}>
            <CheckoutForm />
          </div>
        </div>
      )}
      {items.length === 0 && (
        <div className={emptyCartMessage}>
          <SadFace />
          <p>Cart is empty. Please add something</p>
          <Link to="/store">🛒 Go to store</Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;

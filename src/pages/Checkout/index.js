import classes from "./Checkout.module.css";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import BottomNavBar from "../../components/BottomNavBar/BottomNavBar";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import CartItem from "../../components/CartItem/CartItem";

const Checkout = function () {
  console.log("Render checkout");
  const {
    checkout,
    checkoutContainer,
    cartSummary,
    cartSummaryHeading,
    checkoutFormContainer,
  } = classes;
  return (
    <div className={checkout}>
      <div className={checkoutContainer}>
        <div>
          <h1 className={cartSummaryHeading}>Your Cart</h1>
          <div className={cartSummary}>
            <CartItem />
            <CartItem />
            {/* <CartItem />
            <CartItem />
            <CartItem /> */}
          </div>
        </div>
        <div className={checkoutFormContainer}>
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
};

export default Checkout;

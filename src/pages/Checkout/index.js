import classes from "./Checkout.module.css";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import BottomNavBar from "../../components/BottomNavBar/BottomNavBar";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import CartItem from "../../components/CartItem/CartItem";

const Checkout = function () {
  const { checkout, checkoutContainer, cart } = classes;
  return (
    <div className={checkout}>
      <TopNavBar hasBackground={true} />
      <div className={checkoutContainer}>
        <div className={cart}>cart</div>
        <div>
          <CheckoutForm />
        </div>
        <div>
          <h1>Your Cart</h1>
          <div>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Checkout;

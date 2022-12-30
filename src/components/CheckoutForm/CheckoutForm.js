import classes from "./CheckoutForm.module.css";
import { useSelector } from "react-redux";

const CheckoutForm = function ({ onOpenConfirmModal }) {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const {
    checkoutForm,
    priceInfo,
    checkoutPriceContainer,
    priceLabel,
    priceText,
    checkoutBtn,
  } = classes;
  return (
    <>
      <form
        className={checkoutForm}
        onSubmit={(event) => event.preventDefault()}
      >
        <div className={checkoutPriceContainer}>
          <div className={priceInfo}>
            <p className={priceLabel}>Quantity</p>
            <p className={priceText}>x{totalQuantity}</p>
          </div>
          <div className={priceInfo}>
            <p className={priceLabel}>Total</p>
            <p className={priceText}>₫{totalPrice.toLocaleString()}</p>
          </div>
        </div>

        <div>
          <button className={checkoutBtn} onClick={onOpenConfirmModal}>
            Proceed
          </button>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;

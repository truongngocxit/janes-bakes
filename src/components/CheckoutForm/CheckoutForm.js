import classes from "./CheckoutForm.module.css";

const CheckoutForm = function () {
  const {
    checkoutForm,
    checkoutInput,
    checkoutPriceContainer,
    priceLabel,
    priceText,
    checkoutBtn,
  } = classes;
  return (
    <form className={checkoutForm}>
      <div className={checkoutInput}>
        <label htmlFor="name">Your name</label>
        <input id="name" />
      </div>
      <div className={checkoutInput}>
        <label htmlFor="email">Your name</label>
        <input id="email" />
      </div>
      <div className={checkoutInput}>
        <label htmlFor="phone">Phone number</label>
        <input id="phone" />
      </div>

      <div className={checkoutPriceContainer}>
        <p className={priceLabel}>Total</p>
        <p className={priceText}>$25.99</p>
      </div>

      <div>
        <button type="submit" className={checkoutBtn}>
          Proceed
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;

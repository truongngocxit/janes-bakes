import classes from "./CheckoutForm.module.css";
import { useSelector } from "react-redux";
import { useReducer } from "react";

// const inputReducer = function (state, action) {
//   switch (action.type) {
//     case "NAME":
//       return {
//         ...state,
//         name: action.value,
//       };
//     case "ADDRESS":
//       return {
//         ...state,
//         address: action.value,
//       };
//     case "PHONE":
//       return {
//         ...state,
//         phone: action.value,
//       };
//     default:
//       return state;
//   }
// };

const CheckoutForm = function () {
  // const [formInput, dispatchFormInput] = useReducer(inputReducer, {
  //   name: "",
  //   address: "",
  //   phone: "",
  // });
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  // const handleInputName = function (event) {
  //   dispatchFormInput({ type: "NAME", value: event.target.value });
  // };

  // const handleInputAddress = function (event) {
  //   dispatchFormInput({ type: "ADDRESS", value: event.target.value });
  // };

  // const handleInputPhone = function (event) {
  //   dispatchFormInput({ type: "PHONE", value: event.target.value });
  // };

  const {
    checkoutForm,
    priceInfo,
    checkoutInput,
    checkoutPriceContainer,
    priceLabel,
    priceText,
    checkoutBtn,
  } = classes;
  return (
    <form className={checkoutForm}>
      {/* <div className={checkoutInput}>
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          onChange={handleInputName}
          value={formInput.name}
          required
        />
      </div>
      <div className={checkoutInput}>
        <label htmlFor="address">Your address</label>
        <input
          id="address"
          onChange={handleInputAddress}
          value={formInput.address}
          required
        />
      </div>
      <div className={checkoutInput}>
        <label htmlFor="phone">Phone number</label>
        <input
          id="phone"
          onChange={handleInputPhone}
          value={formInput.phone}
          type="tel"
          pattern="[0-9]{10}"
          required
        />
      </div> */}

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
        <button type="submit" className={checkoutBtn}>
          Proceed
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;

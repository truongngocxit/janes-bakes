import classes from "./OrderConfirmForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../custom-hooks/use-input";
import { cartActions } from "../../reduxStore/cart";

const OrderConfirmForm = function ({ onHasSubmitOrder, onIsSubmittingOrder }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const {
    input: fName,
    handleInputChange: handleFNameChange,
    handleInputIsTouched: handleFNameIsTouched,
    inputHasError: fNameHasError,
    inputIsInvalid: fNameIsInvalid,
  } = useInput((input) => input.trim() === "");

  const {
    input: lName,
    handleInputChange: handleLNameChange,
    handleInputIsTouched: handleLNameIsTouched,
    inputHasError: lNameHasError,
    inputIsInvalid: lNameIsInvalid,
  } = useInput((input) => input.trim() === "");

  const {
    input: phone,
    handleInputChange: handlePhoneChange,
    handleInputIsTouched: handlePhoneIsTouched,
    inputHasError: phoneHasError,
    inputIsInvalid: phoneIsInvalid,
  } = useInput(
    (input) => input.trim().length !== 10 && input.trim().length !== 11
  );

  const {
    input: email,
    handleInputChange: handleEmailChange,
    handleInputIsTouched: handleEmailIsTouched,
    inputHasError: emailHasError,
    inputIsInvalid: emailIsInvalid,
  } = useInput((input) => !input.includes("@"));

  const {
    input: address,
    handleInputChange: handleAddressChange,
    handleInputIsTouched: handleAddressIsTouched,
    inputHasError: addressHasError,
    inputIsInvalid: addressIsInvalid,
  } = useInput((input) => input.trim() === "");

  const {
    input: note,
    handleInputChange: handleNoteChange,
    handleInputIsTouched: handleNoteIsTouched,
  } = useInput((input) => input.trim() === "");

  const orderFormIsValid =
    !fNameHasError &&
    !lNameHasError &&
    !phoneHasError &&
    !addressHasError &&
    !emailHasError;

  const submitOrderInfo = async function (event) {
    event.preventDefault();
    onIsSubmittingOrder(true);
    await fetch(
      "https://janes-bakes-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          fName,
          lName,
          phone,
          address,
          email,
          note,
          order: items,
        }),
      }
    );
    onIsSubmittingOrder(false);

    onHasSubmitOrder();
    dispatch(cartActions.clearCart());
  };

  const {
    orderForm,
    twoColInput,
    oneColInput,
    formBtn,
    inputError,
    inputInvalid,
  } = classes;

  return (
    <form className={orderForm} onSubmit={submitOrderInfo}>
      <div className={`${twoColInput} ${fNameIsInvalid ? inputInvalid : ""}`}>
        <label htmlFor="fName">First Name</label>
        {fNameIsInvalid && <p className={inputError}>First name is empty!</p>}
        <input
          id="fName"
          onChange={handleFNameChange}
          value={fName}
          onBlur={handleFNameIsTouched}
          required
        />
      </div>
      <div className={`${twoColInput} ${lNameIsInvalid ? inputInvalid : ""}`}>
        <label htmlFor="lName">Last Name</label>
        {lNameIsInvalid && <p className={inputError}>Last name is empty!</p>}
        <input
          id="lName"
          onChange={handleLNameChange}
          value={lName}
          onBlur={handleLNameIsTouched}
          required
        />
      </div>
      <div className={`${twoColInput} ${phoneIsInvalid ? inputInvalid : ""}`}>
        <label htmlFor="phone">Phone</label>
        {phoneIsInvalid && <p className={inputError}>Wrong phone format!</p>}
        <input
          id="phone"
          onChange={handlePhoneChange}
          value={phone}
          onBlur={handlePhoneIsTouched}
          required
        />
      </div>
      <div className={`${twoColInput} ${emailIsInvalid ? inputInvalid : ""}`}>
        <label htmlFor="email">Email</label>
        {emailIsInvalid && <p className={inputError}>Wrong email format</p>}
        <input
          id="email"
          onChange={handleEmailChange}
          value={email}
          onBlur={handleEmailIsTouched}
          required
        />
      </div>
      <div className={`${oneColInput} ${addressIsInvalid ? inputInvalid : ""}`}>
        <label htmlFor="address">Address</label>
        {addressIsInvalid && <p className={inputError}>Address is empty!</p>}
        <input
          id="address"
          onChange={handleAddressChange}
          value={address}
          onBlur={handleAddressIsTouched}
          required
        />
      </div>
      <div className={oneColInput}>
        <label htmlFor="note">Have any notes to me?</label>

        <textarea
          id="note"
          rows="3"
          onChange={handleNoteChange}
          value={note}
          onBlur={handleNoteIsTouched}
        />
      </div>
      <button type="submit" className={formBtn} disabled={!orderFormIsValid}>
        Order
      </button>
    </form>
  );
};

export default OrderConfirmForm;

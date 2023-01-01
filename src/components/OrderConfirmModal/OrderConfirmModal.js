import classes from "./OrderConfirmModal.module.css";
import CloseSVG from "../UI/CloseSVG";
import { useSelector } from "react-redux";
import { useState } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import OrderReceipt from "../OrderReceipt/OrderReceipt";
import OrderSuccess from "../OrderSuccess/OrderSuccess";
import OrderConfirmForm from "../OrderConfirmForm/OrderConfirmForm";

const OrderConfirmModal = function ({ onClose }) {
  const [hasSubmitOrder, setHasSubmitOrder] = useState(false);
  const [isSubmittingOrder, setIsSubmittingOrder] = useState(false);
  const allItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const { orderConfirm, closeBtn, loading, receipt, confirmForm } = classes;
  const handleHasSubmitOrder = function () {
    setHasSubmitOrder(true);
  };
  return (
    <div className={orderConfirm}>
      <div className={closeBtn} onClick={onClose}>
        <CloseSVG />
      </div>
      {isSubmittingOrder && <LoadingSpinner className={loading} />}
      {hasSubmitOrder && !isSubmittingOrder && <OrderSuccess />}
      {!hasSubmitOrder && !isSubmittingOrder && (
        <>
          <h1>Hi, you have order these products:</h1>
          <div className={receipt}>
            <OrderReceipt orderItems={allItems} totalPrice={totalPrice} />
          </div>
          <div className={confirmForm}>
            <OrderConfirmForm
              onClose={onClose}
              onHasSubmitOrder={handleHasSubmitOrder}
              onIsSubmittingOrder={setIsSubmittingOrder}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default OrderConfirmModal;

// function ReceiptItem({ index, quantity, name, price }) {
//   const { order, orderNumber, orderQuantity, orderName, orderPrice } = classes;
//   return (
//     <div className={order}>
//       <p className={orderNumber}>#{index}</p>
//       <p className={orderQuantity}>Qty: {quantity}</p>
//       <h4 className={orderName}>{name}</h4>
//       <p className={orderPrice}>₫{(quantity * price).toLocaleString()}</p>
//     </div>
//   );
// }

// function OrderConfirmForm({ onHasSubmitOrder, onIsSubmittingOrder }) {
//   const items = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();
//   const {
//     input: fName,
//     handleInputChange: handleFNameChange,
//     handleInputIsTouched: handleFNameIsTouched,
//     inputHasError: fNameHasError,
//     inputIsInvalid: fNameIsInvalid,
//   } = useInput((input) => input.trim() === "");

//   const {
//     input: lName,
//     handleInputChange: handleLNameChange,
//     handleInputIsTouched: handleLNameIsTouched,
//     inputHasError: lNameHasError,
//     inputIsInvalid: lNameIsInvalid,
//   } = useInput((input) => input.trim() === "");

//   const {
//     input: phone,
//     handleInputChange: handlePhoneChange,
//     handleInputIsTouched: handlePhoneIsTouched,
//     inputHasError: phoneHasError,
//     inputIsInvalid: phoneIsInvalid,
//   } = useInput(
//     (input) => input.trim().length !== 10 && input.trim().length !== 11
//   );

//   const {
//     input: email,
//     handleInputChange: handleEmailChange,
//     handleInputIsTouched: handleEmailIsTouched,
//     inputHasError: emailHasError,
//     inputIsInvalid: emailIsInvalid,
//   } = useInput((input) => !input.includes("@"));

//   const {
//     input: address,
//     handleInputChange: handleAddressChange,
//     handleInputIsTouched: handleAddressIsTouched,
//     inputHasError: addressHasError,
//     inputIsInvalid: addressIsInvalid,
//   } = useInput((input) => input.trim() === "");

//   const {
//     input: note,
//     handleInputChange: handleNoteChange,
//     handleInputIsTouched: handleNoteIsTouched,
//   } = useInput((input) => input.trim() === "");

//   const orderFormIsValid =
//     !fNameHasError &&
//     !lNameHasError &&
//     !phoneHasError &&
//     !addressHasError &&
//     !emailHasError;

//   const submitOrderInfo = async function (event) {
//     event.preventDefault();
//     onIsSubmittingOrder(true);
//     await fetch(
//       "https://janes-bakes-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         method: "POST",
//         body: JSON.stringify({
//           fName,
//           lName,
//           phone,
//           address,
//           email,
//           note,
//           order: items,
//         }),
//       }
//     );
//     onIsSubmittingOrder(false);

//     onHasSubmitOrder();
//     dispatch(cartActions.clearCart());
//   };

//   const {
//     orderForm,
//     twoColInput,
//     oneColInput,
//     formBtn,
//     inputError,
//     inputInvalid,
//   } = classes;

//   return (
//     <form className={orderForm} onSubmit={submitOrderInfo}>
//       <div className={`${twoColInput} ${fNameIsInvalid ? inputInvalid : ""}`}>
//         <label htmlFor="fName">First Name</label>
//         {fNameIsInvalid && <p className={inputError}>First name is empty!</p>}
//         <input
//           id="fName"
//           onChange={handleFNameChange}
//           value={fName}
//           onBlur={handleFNameIsTouched}
//           className={fNameIsInvalid && inputInvalid}
//         />
//       </div>
//       <div className={`${twoColInput} ${lNameIsInvalid ? inputInvalid : ""}`}>
//         <label htmlFor="lName">Last Name</label>
//         {lNameIsInvalid && <p className={inputError}>Last name is empty!</p>}
//         <input
//           id="lName"
//           onChange={handleLNameChange}
//           value={lName}
//           onBlur={handleLNameIsTouched}
//           className={lNameIsInvalid && inputInvalid}
//         />
//       </div>
//       <div className={`${twoColInput} ${phoneIsInvalid ? inputInvalid : ""}`}>
//         <label htmlFor="phone">Phone</label>
//         {phoneIsInvalid && <p className={inputError}>Wrong phone format!</p>}
//         <input
//           id="phone"
//           onChange={handlePhoneChange}
//           value={phone}
//           onBlur={handlePhoneIsTouched}
//           className={phoneIsInvalid && inputInvalid}
//         />
//       </div>
//       <div className={`${twoColInput} ${emailIsInvalid ? inputInvalid : ""}`}>
//         <label htmlFor="email">Email</label>
//         {emailIsInvalid && <p className={inputError}>Wrong email format</p>}
//         <input
//           id="email"
//           onChange={handleEmailChange}
//           value={email}
//           onBlur={handleEmailIsTouched}
//           className={emailIsInvalid && inputInvalid}
//         />
//       </div>
//       <div className={`${oneColInput} ${addressIsInvalid ? inputInvalid : ""}`}>
//         <label htmlFor="address">Address</label>
//         {addressIsInvalid && <p className={inputError}>Address is empty!</p>}
//         <input
//           id="address"
//           onChange={handleAddressChange}
//           value={address}
//           onBlur={handleAddressIsTouched}
//           className={addressIsInvalid && inputInvalid}
//         />
//       </div>
//       <div className={oneColInput}>
//         <label htmlFor="note">Have any notes to me?</label>

//         <textarea
//           id="note"
//           rows="3"
//           onChange={handleNoteChange}
//           value={note}
//           onBlur={handleNoteIsTouched}
//         />
//       </div>
//       <button type="submit" className={formBtn} disabled={!orderFormIsValid}>
//         Order
//       </button>
//     </form>
//   );
// }

// const OrderSuccess = function () {
//   const routeNavigate = useNavigate();
//   const [navigateCountdown, setNavigateCountdown] = useState(10);

//   useEffect(() => {
//     const timeoutId = setTimeout(
//       () => setNavigateCountdown(navigateCountdown - 1),
//       1000
//     );
//     if (navigateCountdown === 0) {
//       routeNavigate("/");
//       return clearTimeout(timeoutId);
//     }
//   }, [navigateCountdown, routeNavigate]);
//   const { orderSuccess, mascot, orderSuccessMessage, navigate } = classes;
//   return (
//     <div className={orderSuccess}>
//       <div className={mascot}>
//         <JanesBakeMascot />
//         <div className={navigate}>
//           <Link to="/">Back to Home</Link>
//           <p>
//             Or you will be navigated automatically after{" "}
//             <strong>{navigateCountdown}</strong> seconds...
//           </p>
//         </div>
//       </div>
//       <div className={orderSuccessMessage}>
//         <h2>Thank you for choosing Jane Bakes :D</h2>
//         <p>I have received your order and will contact you shortly</p>
//       </div>
//     </div>
//   );
// };

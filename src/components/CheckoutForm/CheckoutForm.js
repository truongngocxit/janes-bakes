import classes from "./CheckoutForm.module.css";
import { useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { useState } from "react";
import Overlay from "../UI/Overlay";
import OrderConfirmModal from "../OrderConfirmModal/OrderConfirmModal";

const CheckoutForm = function () {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleOpenConfirmModal = function () {
    setShowConfirmModal(true);
  };

  const handleCloseConfirmModal = function () {
    setShowConfirmModal(false);
  };

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
          <button className={checkoutBtn} onClick={handleOpenConfirmModal}>
            Proceed
          </button>
        </div>
      </form>

      {showConfirmModal &&
        createPortal(
          <OrderConfirmModal onClose={handleCloseConfirmModal} />,
          document.getElementById("overlay-root")
        )}
      {showConfirmModal &&
        createPortal(
          <Overlay onClick={handleCloseConfirmModal} />,
          document.getElementById("overlay-root")
        )}
    </>
  );
};

export default CheckoutForm;

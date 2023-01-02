import classes from "./Checkout.module.css";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import ChevronLeft from "../../components/UI/ChevronLeft";
import CartSummary from "../../components/CartItem/CartSummary";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import SadFace from "../../components/UI/SadFace";
import { createPortal } from "react-dom";
import Overlay from "../../components/UI/Overlay";
import OrderConfirmModal from "../../components/OrderConfirmModal/OrderConfirmModal";

const Checkout = function () {
  const items = useSelector((state) => state.cart.items);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const handleOpenConfirmModal = function () {
    setShowConfirmModal(true);
  };

  const handleCloseConfirmModal = function () {
    setShowConfirmModal(false);
  };
  const {
    checkoutPage,
    checkoutContainer,
    checkoutFormContainer,
    cartSummaryHeading,
    backLink,
    emptyCartMessage,
    cartSummary,
    summaryScroll,
  } = classes;
  return (
    <>
      <div className={checkoutPage}>
        {items.length > 0 && (
          <div className={checkoutContainer}>
            <div>
              <Link to="/store" className={backLink}>
                <ChevronLeft />
                <span>Back to Shopping</span>
              </Link>
              <h1 className={cartSummaryHeading}>Your Cart</h1>
              <div
                className={`${cartSummary} ${
                  items.length > 2 ? summaryScroll : ""
                }`}
              >
                <CartSummary />
              </div>
            </div>
            <div className={checkoutFormContainer}>
              <CheckoutForm
                onOpenConfirmModal={handleOpenConfirmModal}
                onCloseConfirmModal={handleCloseConfirmModal}
              />
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

export default Checkout;

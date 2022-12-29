import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { cartActions } from "../../reduxStore/cart";
import Overlay from "../UI/Overlay";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import Add from "../UI/AddSVG";
import Minus from "../UI/MinusSVG";
import Trash from "../UI/TrashSVG";
import { createPortal } from "react-dom";

const CartItem = function ({
  id,
  name,
  url,
  price,
  description,
  totalPrice,
  quantity,
}) {
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const dispatch = useDispatch();

  const handleAddItem = function () {
    dispatch(
      cartActions.addItem({
        name,
        description,
        price,
        url,
        id,
      })
    );
  };

  const handleRemoveItem = function () {
    if (quantity === 1 && !showRemoveModal) {
      setShowRemoveModal(true);
    } else if (quantity === 1 && showRemoveModal) {
      dispatch(cartActions.removeItem(id));
      setShowRemoveModal(false);
    } else {
      dispatch(cartActions.removeItem(id));
    }
  };

  const closeConfirmModal = function () {
    setShowRemoveModal(false);
  };

  const handleDeleteItem = function () {
    setShowDeleteModal(true);
  };

  const handleConfirmDeleteItem = function () {
    dispatch(cartActions.deleteItem(id));
  };
  const {
    cartItem,
    cartItemImage,
    cartItemInfo,
    cartItemPrice,
    quantityAdjust,
    removeBtn,
  } = classes;
  return (
    <div className={cartItem}>
      <button className={removeBtn} onClick={handleDeleteItem}>
        <Trash />
      </button>
      <div className={cartItemImage}>
        <img src={url} alt={name} />
      </div>
      <div className={cartItemInfo}>
        <h3>{name}</h3>
        <p>{description.slice(0, 40) + "..."}</p>
      </div>
      <div className={quantityAdjust}>
        <button onClick={handleAddItem}>
          <Add />
        </button>
        <p>{quantity}</p>
        <button onClick={handleRemoveItem}>
          <Minus />
        </button>
      </div>
      <div className={cartItemPrice}>
        <h3>₫{totalPrice.toLocaleString()}</h3>
      </div>
      {showRemoveModal && (
        <>
          {createPortal(
            <ConfirmModal
              onConfirm={handleRemoveItem}
              onCancel={closeConfirmModal}
            />,
            document.getElementById("overlay-root")
          )}
          {createPortal(<Overlay />, document.getElementById("overlay-root"))}
        </>
      )}
      {showDeleteModal && (
        <>
          {createPortal(
            <ConfirmModal
              onConfirm={handleConfirmDeleteItem}
              onCancel={closeConfirmModal}
            />,
            document.getElementById("overlay-root")
          )}
          {createPortal(<Overlay />, document.getElementById("overlay-root"))}
        </>
      )}
    </div>
  );
};

export default CartItem;

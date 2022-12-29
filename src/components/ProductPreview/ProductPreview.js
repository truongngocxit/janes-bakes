import classes from "./ProductPreview.module.css";
import CloseIcon from "../UI/CloseSVG";
import Check from "../UI/CheckSVG";
import { useDispatch } from "react-redux";
import { cartActions } from "../../reduxStore/cart";
import { useState } from "react";

const ProductPreview = function ({
  name,
  description,
  price,
  url,
  id,
  onClosePreview,
}) {
  const [quantity, setQuantity] = useState(1);
  const [cartDidAdd, setCartDidAdd] = useState(false);
  const dispatch = useDispatch();
  const handleAddItem = function () {
    new Array(quantity)
      .fill()
      .forEach(() =>
        dispatch(cartActions.addItem({ name, description, price, url, id }))
      );
    setCartDidAdd(true);
    setTimeout(() => onClosePreview(), 1200);
  };

  const handleInputQuantity = function (event) {
    const input = Number(event.target.value);
    if (isNaN(input) || input < 1) return;
    setQuantity(input);
  };

  const handleIncreaseInput = function () {
    setQuantity((q) => q + 1);
  };

  const handleDecreaseInput = function () {
    if (quantity === 1) return;
    setQuantity((q) => q - 1);
  };

  const {
    productPreview,
    productPreviewImage,
    productPreviewInfo,
    priceSummary,
    productPreviewActions,
    priceLabel,
    summary,
    closeIcon,
    quantityInput,
    quantityControl,
    productPreviewBeforeAdd,
    productPreviewAfterAdd,
  } = classes;

  if (cartDidAdd)
    return (
      <div className={`${productPreview} ${productPreviewAfterAdd}`}>
        <Check />
        <p>Items is successfully added to cart</p>
      </div>
    );

  if (!cartDidAdd)
    return (
      <div className={`${productPreview} ${productPreviewBeforeAdd}`}>
        <div className={closeIcon} onClick={onClosePreview}>
          <CloseIcon />
        </div>
        <div className={productPreviewImage}>
          <img src={url} alt={name} onLoad={() => console.log("Loaded")} />
        </div>
        <div className={productPreviewInfo}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div className={summary}>
          <div className={priceSummary}>
            <p>Total</p>
            <h3>{(price * quantity).toLocaleString()}₫</h3>
          </div>
          <div className={quantityInput}>
            <label htmlFor="quantity" className={priceLabel}>
              Quantity
            </label>
            <div className={quantityControl}>
              <button onClick={handleDecreaseInput}>-</button>
              <input
                id="price"
                onChange={handleInputQuantity}
                value={quantity}
              />
              <button onClick={handleIncreaseInput}>+</button>
            </div>
          </div>
        </div>
        <div className={productPreviewActions} onClick={handleAddItem}>
          <button>Add to cart</button>
        </div>
      </div>
    );
};

export default ProductPreview;

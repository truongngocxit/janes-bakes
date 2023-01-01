import classes from "./StoreItem.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProductPreview from "../ProductPreview/ProductPreview";
import Overlay from "../UI/Overlay";

const StoreItem = function ({ name, url, description, price, id }) {
  const [showPreview, setShowPreview] = useState(false);
  const {
    productItemContainer,
    productImage,
    productInfo,
    productPrice,
    productDescription,
    productAddBtn,
    darkMode,
  } = classes;

  const handleOpenPreview = function () {
    setShowPreview(true);
  };

  const handleClosePreview = function () {
    setShowPreview(false);
  };

  return (
    <>
      <li
        className={`${productItemContainer} ${darkMode}`}
        onClick={handleOpenPreview}
      >
        <div className={productImage}>
          <img src={url} alt={name} loading="lazy" />
        </div>
        <div className={productInfo}>
          <div className={productDescription}>
            <h3>{name}</h3>

            <p>{description}</p>
          </div>
          <p className={productPrice}>
            {price.toLocaleString()}₫<span>/1p</span>
          </p>
          <Link className={productAddBtn} to="#">
            +
          </Link>
        </div>
      </li>
      {showPreview && (
        <ProductPreview
          onClosePreview={handleClosePreview}
          name={name}
          description={description}
          price={price}
          url={url}
          id={id}
        />
      )}

      {showPreview && <Overlay onClick={handleClosePreview} />}
    </>
  );
};

export default StoreItem;

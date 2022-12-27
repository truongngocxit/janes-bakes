import classes from "./StoreItem.module.css";
import { Link } from "react-router-dom";

const StoreItem = function ({ name, url, description, price, id }) {
  const {
    productItemContainer,
    productImage,
    productInfo,
    productPrice,
    productDescription,
    productAddBtn,
  } = classes;

  return (
    <li className={productItemContainer}>
      <div className={productImage}>
        <img src={url} alt={name} loading="lazy" />
      </div>
      <div className={productInfo}>
        <div className={productDescription}>
          <h3>{name}</h3>

          <p>{description}</p>
        </div>
        <p className={productPrice}>
          {price}₫<span> /1p</span>
        </p>
        <Link className={productAddBtn} to="#">
          Add +
        </Link>
      </div>
    </li>
  );
};

export default StoreItem;

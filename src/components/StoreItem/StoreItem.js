import classes from "./StoreItem.module.css";
import CheeseCake from "../../assets/product-images/cheesecake-product.jpg";

const StoreItem = function () {
  const {
    productItemContainer,
    productImage,
    productInfo,
    productPrice,
    productHeading,
    productAddBtn,
  } = classes;
  return (
    <div className={productItemContainer}>
      <div className={productImage}>
        <img src={CheeseCake} />
      </div>
      <div className={productInfo}>
        <h3 className={productHeading}>Strawberry Cheesecake</h3>
        <p className={productPrice}>
          $25.99<span>/1p</span>
        </p>
        <a className={productAddBtn} href="#">
          Add +
        </a>
      </div>
    </div>
  );
};

export default StoreItem;

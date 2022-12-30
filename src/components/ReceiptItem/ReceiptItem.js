import classes from "./ReceiptItem.module.css";

const ReceiptItem = function ({ index, quantity, name, price }) {
  const { order, orderNumber, orderQuantity, orderName, orderPrice } = classes;
  return (
    <div className={order}>
      <p className={orderNumber}>#{index}</p>
      <p className={orderQuantity}>Qty: {quantity}</p>
      <h4 className={orderName}>{name}</h4>
      <p className={orderPrice}>₫{(quantity * price).toLocaleString()}</p>
    </div>
  );
};

export default ReceiptItem;

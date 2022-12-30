import classes from "./OrderReceipt.module.css";
import ReceiptItem from "../ReceiptItem/ReceiptItem";

const OrderReceipt = function ({ orderItems, totalPrice }) {
  const today = new Date().toLocaleDateString("vi-vn");
  const { orderReceipt, orderDate, allOrders, orderSummary, orderTotal } =
    classes;
  return (
    <div className={orderReceipt}>
      <div className={allOrders}>
        {orderItems.map((item, index) => (
          <ReceiptItem
            index={index + 1}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            key={item.id}
          />
        ))}
      </div>
      <div className={orderSummary}>
        <div className={orderTotal}>
          <p>Total</p>
          <h4>₫{totalPrice.toLocaleString()}</h4>
        </div>
        <div className={orderDate}>
          <p>Date</p>
          <h4>{today}</h4>
        </div>
      </div>
    </div>
  );
};

export default OrderReceipt;

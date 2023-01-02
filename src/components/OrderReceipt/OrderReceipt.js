import classes from "./OrderReceipt.module.css";
import ReceiptItem from "../ReceiptItem/ReceiptItem";
import { useContext } from "react";
import { darkModeContext } from "../../context/theme-context";

const OrderReceipt = function ({ orderItems, totalPrice }) {
  const { darkModeIsOn } = useContext(darkModeContext);
  const today = new Date().toLocaleDateString("vi-vn");
  const {
    orderReceipt,
    orderDate,
    allOrders,
    orderSummary,
    orderTotal,
    allOrdersScroll,
    darkMode,
  } = classes;
  return (
    <div className={`${orderReceipt} ${darkModeIsOn ? darkMode : ""}`}>
      <div
        className={`${allOrders} ${
          orderItems.length > 5 ? allOrdersScroll : ""
        }`}
      >
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

import classes from "./OrderSuccess.module.css";
import JanesBakeMascot from "../UI/JanesBakeMascot";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const OrderSuccess = function () {
  const routeNavigate = useNavigate();
  const [navigateCountdown, setNavigateCountdown] = useState(10);

  useEffect(() => {
    const timeoutId = setTimeout(
      () => setNavigateCountdown(navigateCountdown - 1),
      1000
    );
    if (navigateCountdown === 0) {
      routeNavigate("/");
      return clearTimeout(timeoutId);
    }
  }, [navigateCountdown, routeNavigate]);
  const { orderSuccess, mascot, orderSuccessMessage, navigate } = classes;
  return (
    <div className={orderSuccess}>
      <div className={mascot}>
        <JanesBakeMascot />
        <div className={navigate}>
          <Link to="/">Back to Home</Link>
          <p>
            Or you will be navigated automatically after{" "}
            <strong>{navigateCountdown}</strong> seconds...
          </p>
        </div>
      </div>
      <div className={orderSuccessMessage}>
        <h2>Thank you for choosing Jane Bakes :D</h2>
        <p>I have received your order and will contact you shortly</p>
      </div>
    </div>
  );
};

export default OrderSuccess;

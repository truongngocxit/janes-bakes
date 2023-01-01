import classes from "./GeneralButton.module.css";
import { Link } from "react-router-dom";

const GeneralButton = function ({
  children,
  isMainBtn = true,
  className,
  to,
  type = "medium",
}) {
  const {
    btnContainer,
    btnText,
    btnMain,
    btnSub,
    btnLarge,
    btnSmall,
    btnMedium,
  } = classes;

  let btnType;

  if (type === "small") btnType = btnSmall;
  if (type === "medium") btnType = btnMedium;
  if (type === "large") btnType = btnLarge;

  return (
    <Link
      to={to}
      className={`${btnContainer} ${className} ${btnType} ${
        isMainBtn ? btnMain : btnSub
      }`}
    >
      <span className={btnText}>{children}</span>
    </Link>
  );
};

export default GeneralButton;

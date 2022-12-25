import classes from "./GeneralButton.module.css";
import { Link } from "react-router-dom";

const GeneralButton = function ({ children, isMainBtn = true, to }) {
  const { btnContainer, btnText, btnMain, btnSub } = classes;
  return (
    <Link to={to} className={`${btnContainer} ${isMainBtn ? btnMain : btnSub}`}>
      <span className={btnText}>{children}</span>
    </Link>
  );
};

export default GeneralButton;

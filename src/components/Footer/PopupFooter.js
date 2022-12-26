import classes from "./PopupFooter.module.css";
import CloseSVG from "../UI/CloseSVG";
import Overlay from "../UI/Overlay";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { footerActions } from "../../reduxStore/footer-display";
import { createPortal } from "react-dom";
import BaseFooter from "./BaseFooter";

const Footer = function () {
  const dispatch = useDispatch();
  const footerIsDisplay = useSelector(
    (state) => state.footerDisplay.footerDisplay
  );

  const handleCloseFooter = function () {
    console.log("close");
    dispatch(footerActions.offFooter());
  };

  const { footerContainer, closeIcon, footerOn, footerOff } = classes;
  return (
    <div
      className={`${footerContainer} ${footerIsDisplay ? footerOn : footerOff}`}
    >
      {/* Portal for Overlay */}
      {createPortal(
        <Overlay isDisplay={footerIsDisplay} onClick={handleCloseFooter} />,
        document.getElementById("overlay-root")
      )}
      {/* End portal */}
      <CloseSVG className={closeIcon} onClick={handleCloseFooter} />
      <BaseFooter />
    </div>
  );
};

export default Footer;

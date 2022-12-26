import classes from "./Overlay.module.css";
export default function Overlay({ isDisplay, onClick }) {
  const { overlay, overlayOff, overlayOn } = classes;
  return (
    <div
      onClick={onClick}
      className={`${overlay} ${isDisplay ? overlayOn : overlayOff}`}
    ></div>
  );
}

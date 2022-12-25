import classes from "./Overlay.module.css";
export default function Overlay({ isDisplay }) {
  const { overlay, overlayOff, overlayOn } = classes;
  return (
    <div className={`${overlay} ${isDisplay ? overlayOn : overlayOff}`}></div>
  );
}

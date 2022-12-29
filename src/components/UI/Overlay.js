import classes from "./Overlay.module.css";
export default function Overlay({ onClick }) {
  const { overlay } = classes;
  return <div onClick={onClick} className={overlay}></div>;
}

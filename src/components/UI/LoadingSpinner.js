import classes from "./LoadingSpinner.module.css";
export default function LoadingSpinner({ className, color = "#ffb3c1" }) {
  const loadingSpinnerClass = classes["lds-ellipsis"];
  return (
    <div className={`${loadingSpinnerClass} ${className}`}>
      <div style={{ backgroundColor: color }}></div>
      <div style={{ backgroundColor: color }}></div>
      <div style={{ backgroundColor: color }}></div>
      <div style={{ backgroundColor: color }}></div>
    </div>
  );
}

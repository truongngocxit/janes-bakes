import classes from "./LoadingSpinner.module.css";
export default function LoadingSpinner({ className }) {
  const loadingSpinnerClass = classes["lds-ellipsis"];
  return (
    <div className={`${loadingSpinnerClass} ${className}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

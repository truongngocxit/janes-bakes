import classes from "./LoadingSpinner.module.css";
export default function LoadingSpinner() {
  const loadingSpinnerClass = classes["lds-ellipsis"];
  return (
    <div className={loadingSpinnerClass}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

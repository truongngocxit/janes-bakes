import classes from "./SuccessAnimation.module.css";

export default function SuccessAnimation() {
  const {
    successCheckmark,
    checkIcon,
    iconLine,
    lineTip,
    lineLong,
    iconCircle,
    iconFix,
  } = classes;
  return (
    <div class={successCheckmark}>
      <div class={checkIcon}>
        <span class={`${iconLine} ${lineTip}`}></span>
        <span class={`${iconLine} ${lineLong}`}></span>
        <div class={iconCircle}></div>
        <div class={iconFix}></div>
      </div>
    </div>
  );
}

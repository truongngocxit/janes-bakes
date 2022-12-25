import classes from "./GeneralButton.module.css";

const GeneralButton = function ({ children, isMainBtn = true }) {
  const { btnContainer, btnText, btnMain, btnSub } = classes;
  return (
    <div className={`${btnContainer} ${isMainBtn ? btnMain : btnSub}`}>
      <a href="#" className={btnText}>
        {children}
      </a>
    </div>
  );
};

export default GeneralButton;

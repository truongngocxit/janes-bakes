import classes from "./Error404.module.css";
import GeneralButton from "../../components/GeneralButton/GeneralButton";
import RadialCirle from "../../components/UI/RadialCircle";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error404 = function () {
  const [navigateTimeLeft, setNavigateTimeleft] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setNavigateTimeleft(navigateTimeLeft - 1);
    }, 1000);

    if (navigateTimeLeft === 0) navigate("/");
  }, [navigateTimeLeft, navigate]);

  const { errorPage, errorHeading, btnsContainer, errorMessage } = classes;
  return (
    <div className={errorPage}>
      <RadialCirle x="50" y="30" size="30" />
      <RadialCirle x="5" y="50" size="20" />
      <RadialCirle x="80" y="10" size="20" />

      <div className={errorMessage}>
        <h1 className={errorHeading}>Not all who wander are lost</h1>
        <p>...except those who come to this 404 page</p>
      </div>
      <div className={btnsContainer}>
        <GeneralButton to="store">Go back home</GeneralButton>

        <p>
          Or you will be navigated automatically after{" "}
          <strong>{navigateTimeLeft}</strong> seconds...
        </p>
      </div>
    </div>
  );
};

export default Error404;

import TopNavBar from "../TopNavBar/TopNavBar";
import BottomNavBar from "../BottomNavBar/BottomNavBar";
import classes from "./PageLayout.module.css";
import PopupFooter from "../Footer/PopupFooter";
import { useContext } from "react";
import { darkModeContext } from "../../context/theme-context";

const PageLayout = function ({ children }) {
  const { darkModeIsOn } = useContext(darkModeContext);
  const { pageLayout, pageBody, darkMode } = classes;
  return (
    <div className={`${pageLayout} ${darkModeIsOn ? darkMode : ""}`}>
      <TopNavBar hasBackground={true} />
      <main className={pageBody}>{children}</main>
      <BottomNavBar />
      <PopupFooter />
    </div>
  );
};

export default PageLayout;

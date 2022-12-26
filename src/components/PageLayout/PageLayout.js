import TopNavBar from "../TopNavBar/TopNavBar";
import BottomNavBar from "../BottomNavBar/BottomNavBar";
import classes from "./PageLayout.module.css";
import PopupFooter from "../Footer/PopupFooter";

const PageLayout = function ({ children }) {
  const { pageLayout, pageBody } = classes;
  return (
    <div className={pageLayout}>
      <TopNavBar hasBackground={true} />
      <main className={pageBody}>{children}</main>
      <BottomNavBar />
      <PopupFooter />
    </div>
  );
};

export default PageLayout;

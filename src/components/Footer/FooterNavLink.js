import { Link } from "react-router-dom";
import classes from "./FooterNavLink.module.css";
import Chevron from "../UI/Chevron";

const FooterNavLink = function ({ linkText, to, onClick }) {
  const { navLink, chevron } = classes;
  return (
    <li>
      <Chevron className={chevron} />
      <Link to={to} className={navLink} onClick={onClick}>
        {linkText}
      </Link>
    </li>
  );
};

export default FooterNavLink;

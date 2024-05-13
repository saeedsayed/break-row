import React from "react";
import style from "./MainBtn.module.css";
import { Link } from "react-router-dom";

const MainButton = ({ children, to, ...rest }) => {
  return to ? (
    <button {...rest} className={style.mainButton}>
      <Link to={to}> {children}</Link>
    </button>
  ) : (
    <button {...rest} className={style.mainButton}>
      {children}
    </button>
  );
};

export default MainButton;

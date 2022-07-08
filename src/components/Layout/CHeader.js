import React from "react";
import headerImg from "../../assets/meals.jpg";
import classes from "./CHeader.module.css";
import HeaderCartButton from "./HeaderCartButton";

const CHeader = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>FoodVault</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerImg} alt="A table full of meals" />
      </div>
    </React.Fragment>
  );
};

export default CHeader;

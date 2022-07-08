import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  // reduce is a javascript method which allows us to count values of unique item
  // For example, we have taken 3 sushi, but the number of items will be 1 with quantity 3.
  // For, 3 sushi and 2 hotdogs ==> this function is giving 2 total items to be shown in the cart value on header.

  // reduce takes 2 arguments.
  // 1) a function which will be executed. which takes two parameters.
  //      1.a) current number
  //      2.b) item
  // 2) starting value.
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={classes.icon}>
        {/* Using an svg icon, fetched as a seperate component */}
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

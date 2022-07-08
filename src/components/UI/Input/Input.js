import React from "react";
import classes from "./Input.module.css";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* We have used a spread operator on input element below. 
      This ensures all the configurations for the input element is fetched. 
      for example type="text" etc.  */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;

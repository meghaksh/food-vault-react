import React from "react";
import Available from "./Available";
import MealsSummary from "./MealsSummary";

const Meals = (props) => {
  return (
    <React.Fragment>
      <MealsSummary />
      <Available />
    </React.Fragment>
  );
};
export default Meals;

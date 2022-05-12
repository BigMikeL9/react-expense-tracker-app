import React from "react";

import "./ExpenseDate.scss";

const ExpenseDate = (props) => {
  //   console.log(props);

  const date_Day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const date_Month = props.date.toLocaleString("en-US", { month: "long" });
  const date_Year = props.date.getFullYear();

  //   console.log(date_Day, date_Month, date_Year);

  return (
    <div className="expense-date">
      <div className="expense-date-month">{date_Month}</div>
      <div className="expense-date-year">{date_Year}</div>
      <div className="expense-date-day">{date_Day}</div>
    </div>
  );
};

export default ExpenseDate;

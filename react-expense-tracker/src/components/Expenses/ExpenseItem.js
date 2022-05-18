import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.scss";

const ExpenseItem = (props) => {
  // console.log(props);
  // console.log(React, typeof React.useState);
  const [title, setTitle] = useState(props.title);

  // console.log(title);

  const clickHandler = function (event) {
    setTitle("😊😊😊😊");
    // console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>

      <button onClick={clickHandler}>Click Me!!</button>
    </Card>
  );
};

export default ExpenseItem;

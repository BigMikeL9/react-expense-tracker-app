import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.scss";

const ExpensesList = (props) => {
  // -- If 'filtered_Expenses' array is empty, display a message
  // -- ⭐⭐ By returning a different JSX code snippet for this component function. (Not continuing with the rest of the code below)
  if (props.filteredExpenses <= 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found!! 😭</h2>;
  }

  // -- Else render expenses in the 'filtered_Expenses' array, by returning the JSX code snippet below.
  const expensesToRender = props.filteredExpenses.map((filtered_Expense) => (
    <ExpenseItem
      key={filtered_Expense.id}
      title={filtered_Expense.title}
      amount={filtered_Expense.amount}
      date={filtered_Expense.date}
    />
  ));

  return <ul className="expenses-list">{expensesToRender}</ul>;
};

export default ExpensesList;

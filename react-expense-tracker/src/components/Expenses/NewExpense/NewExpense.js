import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.scss";

const NewExpense = (props) => {
  // console.log(props);

  // -- gets submitted data from child component 'ExpenseForm.js'
  const submittedExpenseDataHandler = (enteredExpenseDate) => {
    const expenseData = {
      ...enteredExpenseDate, // -- pull all key/value pairs from passed in argument
      id: Date.now().toString(), // -- generate random id
    };

    // console.log(expenseData);

    // -- pass Data to PARENT component 'App.js'
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseData={submittedExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

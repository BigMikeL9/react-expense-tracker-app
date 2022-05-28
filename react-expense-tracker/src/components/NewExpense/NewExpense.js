import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.scss";

const NewExpense = (props) => {
  // console.log(props);

  // -- States --
  // 🟠 -- Instructor's way 👇
  // const [isEditing, setIsEditing] = useState(false);

  // -- Event Handlers --
  const addExpenseBtnHandler = (event) => {
    setCurrentState(expenseForm);

    // 🟠 -- Instructor's way 👇
    // setIsEditing(true);
  };

  const closeFormHandler = () => {
    setCurrentState(addExpense_Btn);

    // 🟠 -- Instructor's way 👇
    // setIsEditing(false);
  };

  // get submitted data from child component 'ExpenseForm.js'
  const submittedExpenseDataHandler = (enteredExpenseDate) => {
    const expenseData = {
      ...enteredExpenseDate, // -- pull all key/value pairs from passed in argument
      id: Date.now().toString(), // -- generate random id
    };

    // console.log(expenseData);

    // -- pass Data to PARENT component 'App.js'
    props.onAddExpense(expenseData);
  };

  // -- Elements --
  const addExpense_Btn = (
    <button onClick={addExpenseBtnHandler}>Add New Expense 🙌</button>
  );

  const expenseForm = (
    <ExpenseForm
      onSubmitExpenseData={submittedExpenseDataHandler}
      onCloseForm={closeFormHandler}
    />
  );

  // -- States --
  const [currentState, setCurrentState] = useState(addExpense_Btn);

  return (
    <div className="new-expense">
      {/* // 🟠 -- Instructor's way 👇 */}
      {/* if NOT editing form -> show button */}
      {/* {!isEditing && addExpense_Btn} */}
      {/* if editing form -> show form */}
      {/* {isEditing && expenseForm} */}

      {currentState}
    </div>
  );
};

export default NewExpense;

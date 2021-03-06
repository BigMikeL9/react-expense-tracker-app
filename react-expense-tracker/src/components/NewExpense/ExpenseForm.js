import React, { useState } from "react";

import "./ExpenseForm.scss";

const ExpenseForm = (props) => {
  // console.log(props);

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // 🟠 Another way of handling multiple states, but using one 'useState()' function [prefer having a single 'useState()' to manage each state {dont use}]
  //   const [enteredInput, setEnteredInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  // 🟠
  //   console.log(enteredInput.enteredTitle);
  //   console.log(enteredInput.enteredAmount);
  //   console.log(enteredInput.enteredDate);

  //   console.log(enteredTitle);
  //   console.log(enteredAmount);
  //   console.log(enteredDate);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // 🟠 Updating one state using other way --> have to include other states/keys in the object as well.
    // setEnteredInput((prevState) => {
    //   console.log(prevState);
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // 🟠 Updating one state using other way --> have to include other states/keys in the object as well.
    // setEnteredInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value,
    //   };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // 🟠 Updating one state using other way --> have to include other states/keys in the object as well.
    // setEnteredInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredDate: event.target.value,
    //   };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // -- pass Data to PARENT component 'NewExpense.js'
    props.onSubmitExpenseData(expenseData);

    // -- Clear inputs in form using 'Two-Way Binding'
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");

    // -- hide form
    props.onCloseForm();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            required
            onChange={titleChangeHandler}
            value={enteredTitle}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            required
            onChange={amountChangeHandler}
            value={enteredAmount}
            type="number"
            step="1"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            required
            onChange={dateChangeHandler}
            value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onCloseForm}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

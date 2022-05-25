import React, { useState } from "react";

import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSE_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New LED UHD TV",
    amount: 799.49,
    date: new Date(2022, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {
  // console.log(React);

  // using State for 'expenses' array inorder for this component to rerender whenever we add a new expense, and then the newly added component would show in the browser.
  const [expensesData, setExpensesData] = useState(DUMMY_EXPENSE_DATA);

  // -- gets submitted data from child component 'NewExpense.js' and pushes it to 'expenses' array. Then re-renders this component
  const addExpenseHandler = (enteredExpenseData) => {
    /* ⭐⭐ Important Note: Always use the spread operator when adding new data to an existing one, do NOT use 'push()' to push new 'enteredExpenseData' to the 'expenseData' state, due to a couple of reasons: 
          1. First we want to do this in an immutable manner.
          2. The 'push()' method adds one or more elements to the end of an array and then returns the new length of the array. (it is a mutator method). So it wont give us the      correct output. 
          3. Another reason might be is that since arrays are reference types and are stored in memory, setExpenses() might be treating that array (argument) as a pointer (reference) to the original array. This means nothing has change. The modified array and the original array has the same pointer. And since the state wasn't change, React won't re-evaluate the current component's instance.

          Inshort -> Always use the spread operator when adding new data to an existing one. As shown below 👇👇
*/

    // ⛔⛔ WRONG way of Updating the state based on a PREVIOUS state
    // setExpensesData([enteredExpenseData, ...expensesData]);

    // 🟢🟢 CORRECT way of Updating the state based on a PREVIOUS state
    setExpensesData((prevExpenseState) => {
      return [enteredExpenseData, ...prevExpenseState];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses expenses={expensesData}></Expenses>
    </>
  );
};

export default App;

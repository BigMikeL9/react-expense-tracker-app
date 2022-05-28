import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "../Chart/ExpensesChart";

import "./Expenses.scss";

const Expenses = (props) => {
  // console.log(props);

  const [filteredYear, setFilteredYear] = useState("2022");

  // -- get data/yearFilter from child component ('ExpenseFilter.js')
  const filterYearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // -- filter expenseData Array to selected year
  const filtered_Expenses = props.expenses.filter((expense) => {
    // expense.date.getFullYear().toString() === props.selectedYear;
    return expense.date.toISOString().includes(filteredYear);
  });

  console.log("Filtered Expenses: ", filtered_Expenses);

  return (
    <>
      <ExpensesChart filteredExpenses={filtered_Expenses} />

      <Card className="expenses">
        {/* 👇 Controlled component 👇 */}
        <ExpensesFilter
          selectedYear={filteredYear}
          onChangeFilter={filterYearChangeHandler}
        />

        <ExpensesList filteredExpenses={filtered_Expenses} />

        {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem> */}
      </Card>
    </>
  );
};

export default Expenses;

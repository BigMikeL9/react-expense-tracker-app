import React from "react";

import Chart from "./Chart";

const ExpensesChart = (props) => {
  //   console.log(props);

  const barData = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  props.filteredExpenses.forEach((expense) => {
    // Get month Index from 'expense' object
    const expenseMonth_Index = expense.date.getMonth();

    //  Add cumulative amount to corresponding month in 'barData' Object
    barData[expenseMonth_Index].value += expense.amount;

    // console.log(barData[expenseMonth_Index]);
  });

  return <Chart chartBarData={barData} />;
};

export default ExpensesChart;

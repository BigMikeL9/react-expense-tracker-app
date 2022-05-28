import React from "react";
import Card from "../UI/Card";
import ChartBar from "./ChartBar";

import "./Chart.scss";

const Chart = (props) => {
  // console.log(props);

  // Get the month's maximum value
  const maximumValue = props.chartBarData.reduce((acc, data) =>
    acc > data.value ? acc : data.value
  );

  return (
    <Card className="chart">
      {props.chartBarData.map((barData) => (
        <ChartBar
          key={barData.label}
          value={barData.value}
          maxValue={maximumValue}
          label={barData.label}
        />
      ))}
    </Card>
  );
};

export default Chart;

import React from "react";

import "./ChartBar.scss";

const ChartBar = (props) => {
  // console.log(props);

  const barFill_Height =
    props.maxValue > 0 ? `${(props.value / props.maxValue) * 100}%` : "0%";

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFill_Height }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;

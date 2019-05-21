import React, { Component } from "react";
import { Chart } from "react-charts";
import ReactMinimalPieChart from "react-minimal-pie-chart";

class Pie extends Component {
  render() {
    return (
      // PIE CHART
      <ReactMinimalPieChart
        data={[
          {
            title: "One",
            value: 10,
            color: "#E38627"
          },
          {
            title: "Two",
            value: 15,
            color: "#C13C37"
          },
          {
            title: "Three",
            value: 20,
            color: "#6A2135"
          }
        ]}
        label
        labelStyle={{
          fontSize: "5px",
          fontFamily: "sans-serif",
          fill: "#121212"
        }}
        lengthAngle={-360}
        animate
        style={{ height: "400px" }}
      />
    );
  }
}

export default Pie;

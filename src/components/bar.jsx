import React from "react";
import BarChart from "react-bar-chart";

const data = [
  { text: "2012", value: 500 },
  { text: "2013", value: 300 },
  { text: "20114", value: 700 },
  { text: "2015", value: 100 },
  { text: "2016", value: 259 },
  { text: "2017", value: 600 },
  { text: "2018", value: 500 }
];

const margin = { top: 20, right: 20, bottom: 30, left: 40 };

class Bar extends React.Component {
  render() {
    return (
      <div ref="root">
        <div style={{ width: "50%" }}>
          <BarChart
            ylabel="Quantity"
            width={800}
            height={500}
            margin={margin}
            data={data}
            //   onBarClick={this.handleBarClick}
          />
        </div>
      </div>
    );
  }
}

export default Bar;

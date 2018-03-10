import React, { Component } from "react";

class RouteGraph extends Component {
  constructor(props) {
    super(props);
    this.state = { chart: null, dataTable: null };
    this.redraw = this.redraw.bind(this);
    console.log('this.props.currentRoute.routeName', this.props.currentRoute);
    this.drawChart = this.drawChart.bind(this);
  }

  componentDidMount() {
    google.charts.load("current", { packages: ["timeline"] });
    google.charts.setOnLoadCallback(this.drawChart);
  }


  drawChart() {
    console.log('drawChart() - called');
    var container = document.getElementById("timeline");
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();

    dataTable.addColumn({ type: "string", id: "TransactionDetails" });
    dataTable.addColumn({ type: "date", id: "Start" });
    dataTable.addColumn({ type: "date", id: "End" });
    console.log('this.props.currentRoute.traces.length',this.props.currentRoute.traces.length);
    let traceArr = [];
    traceArr.push([this.props.currentRoute.routeName, new Date(1789, 3, 30), new Date(1809, 2, 4)]);
    for(let i = 0; i < this.props.currentRoute.traces.length; i++){
      
      traceArr.push([this.props.currentRoute.traces[i].type, new Date(1789, 3, 30), new Date(1797, 2, 4)])
    }
    dataTable.addRows(traceArr);

    dataTable.addRows([
      [this.props.currentRoute.routeName, new Date(1789, 3, 30), new Date(1809, 2, 4)],
      // ["File System Calls", new Date(1789, 3, 30), new Date(1797, 2, 4)],
      // ["Database Calls", new Date(1797, 2, 4), new Date(1801, 2, 4)],
      // ["Middleware", new Date(1801, 2, 4), new Date(1809, 2, 4)]
    ]);

    var options = {
      title: "How Much Pizza I Ate Last Night",
      width: 800,
      height: 300
    };

    chart.draw(dataTable, options);
    this.setState({ chart, dataTable });
  }

  redraw() {
    if (this.state && this.state.dataTable && this.state.chart) {
      let dataTable = this.state.dataTable;
      dataTable.addRows([
        ["SALLY PERKINS", new Date(1789, 3, 30), new Date(1800, 2, 4)],
        ["A SLUG", new Date(1797, 2, 4), new Date(1801, 2, 4)],
        ["URMOM", new Date(1801, 2, 4), new Date(1859, 2, 4)]
      ]);

      var options = {
        title: "How Much Pizza I Ate Last Night",
        width: 400,
        height: 300
      }; 

      this.state.chart.draw(dataTable, options);
      this.setState({ rand: "random" });
    }
  }

  render() {
    // this.redraw();
    return (
      
      <div>
        <div id="timeline" style={{ display: "inline-block" }} />
        {/* <button onClick={this.redraw}>Redraw</button> */}
      </div>
    );
  }
}

export default RouteGraph;

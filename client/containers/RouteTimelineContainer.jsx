import React, { Component } from "react";
import RouteGraph from '../components/RouteGraph'

class RouteTimelineContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RouteGraph currentRoute={this.props.currentRoute} />
      </div>
    )

  }
}

export default RouteTimelineContainer;

import React, { Component } from 'react';
import RouteGraphContainer from './RouteGraphContainer.jsx';


class RouteTimelineContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.currentRoute.startTime}</h1>
                <RouteGraphContainer currentRoute={this.props.currentRoute} />
            </div>
        )
    }
}

export default RouteTimelineContainer;
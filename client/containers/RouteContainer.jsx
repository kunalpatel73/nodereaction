import React, { Component } from 'react';
// import RouteTimelineContainer from './containers/RouteTimelineContainer.jsx';
import RouteTitle from '../components/RouteTitle';

class RouteContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <RouteTitle />
                <RouteTimelineContainer />
            </div>
        )
    }
}

export default RouteContainer;




import React, { Component } from 'react';
import RouteTimelineContainer from './RouteTimelineContainer.jsx';
import RouteTitle from '../components/RouteTitle';


class RouteContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={styles.routeContainer}>
                <RouteTitle currentRoute={this.props.currentRoute} />
                <RouteTimelineContainer currentRoute={this.props.currentRoute} />
            </div>
        )
    }
}

const styles = {
    routeContainer: {
        position: 'absolute',
        top: 100,
        left: 350,
        width: 800,
        height: 900,
        backgroundColor: '#323232'
    }
}

export default RouteContainer;




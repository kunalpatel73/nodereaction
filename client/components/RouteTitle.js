import React, { Component } from 'react';

class RouteTitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>{this.props.currentRoute.requestMethod + ' ' + this.props.currentRoute.requestUrl}</h1>
        )
    }
}

export default RouteTitle;
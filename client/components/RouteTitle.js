import React, { Component } from 'react';

class RouteTitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>{this.props.currentRoute.id}</h1>
        )
    }
}

export default RouteTitle;
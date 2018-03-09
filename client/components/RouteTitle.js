import React, { Component } from 'react';

class RouteTitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ color: '#FEFEFA' }}>
                <span>{this.props.currentRoute.requestMethod}</span><span>{this.props.currentRoute.requestUrl}</span>
            </div>
        )
    }
}

export default RouteTitle;
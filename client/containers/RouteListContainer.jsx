import React, { Component } from 'react';
import RouteListItem from '../components/RouteListItem';

class RouteListContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <RouteListItem />
            </div>
        )
    }
}

export default RouteListContainer;


import React, { Component } from 'react';
import HeaderContainer from './containers/HeaderContainer.jsx';
import RouteContainer from './containers/RouteContainer.jsx';
import RouteListContainer from './containers/RouteListContainer.jsx';
import RouteTimelineContainer from './containers/RouteTimelineContainer.jsx';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HeaderContainer />
                <RouteContainer />
                <RouteListContainer />
                <RouteTimelineContainer />
            </div>
        )
    }
}

export default App;
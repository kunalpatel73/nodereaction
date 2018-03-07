import React, { Component } from 'react';
import HeaderContainer from './containers/HeaderContainer.jsx';
import RouteContainer from './containers/RouteContainer.jsx';
import RouteListContainer from './containers/RouteListContainer.jsx';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>hello world</h1>
                <HeaderContainer />
                {/* <RouteContainer />
                <RouteListContainer />  */}
            </div>
        )
    }
}

export default App;
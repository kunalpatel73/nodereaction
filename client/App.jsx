import React, { Component } from 'react';
import HeaderContainer from './containers/HeaderContainer.jsx';
import RouteListContainer from './containers/RouteListContainer.jsx';
import { Route, NavLink, HashRouter } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <HeaderContainer />
                    <RouteListContainer />
                </MuiThemeProvider>
            </div>
        )
    }
}

export default App;
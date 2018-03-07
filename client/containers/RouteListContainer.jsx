import React, { Component } from 'react';
import RouteListItem from '../components/RouteListItem';
import HeaderLogo from '../components/HeaderLogo';

class RouteListContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={styles.routeListBox}>
                <HeaderLogo />
                {/* <RouteListItem /> */}
            </div>
        )
    }
}

const styles = {
    routeListBox: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 300,
        height: 1000,
        backgroundColor: '#323232'
    }
}

export default RouteListContainer;


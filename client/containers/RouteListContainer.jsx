import React, { Component } from 'react';
import HeaderLogo from '../components/HeaderLogo';
import FlatButton from 'material-ui/FlatButton';


class RouteListContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let routeItem = [];
        for (let i = 0; i < this.props.routes.length; i++) {
            const labelName = this.props.routes[i].requestMethod + ' ' + this.props.routes[i].requestUrl;
            routeItem.push(<div><FlatButton id={i} key={i} onClick={() => { this.props.routeItemClicked(i) }} label={labelName} /></div>);
        }
        return (
            <div style={styles.routeListBox}>
                <HeaderLogo />
                <div style={styles.listedRoutes}>
                    {routeItem}
                </div>
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
    },
    listedRoutes: {
        position: 'absolute',
        top: 37,
        left: 74,
        fontSize: 50,
        fontWeight: 'bold',
        fontFamily: 'Cochin'
    }
}

export default RouteListContainer;


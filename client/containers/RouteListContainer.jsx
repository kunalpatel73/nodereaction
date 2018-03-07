import React, { Component } from 'react';
import RouteListItem from '../components/RouteListItem'; // this will be created deoending on the data we get back from fetch;
import HeaderLogo from '../components/HeaderLogo';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import { white } from 'material-ui/styles/colors';

class RouteListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: [],
        }
        this.createGraph = this.createGraph.bind(this);
    }
    componentDidMount() {
        fetch('/routeList', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(function (individualRoute) {
                this.setState({ routes: individualRoute })//indevidualRoute should be all routes, using it this way for testing purposes;
            }.bind(this))


            .catch(error => console.error('Error:', error))
    }

    createGraph(event) {
        let key = event.target.id;
        // <div><Paper style={graphStyle} zDepth={2} /></div>
        <div><FlatButton label='hello' /></div>
        console.log('Helllooo')
    }

    render() {
        let routeItem = [];
        for (let i = 0; i < this.state.routes.length; i++) {
            routeItem.push(<div><FlatButton id={i} key={i} onClick={this.createGraph} label={this.state.routes[i]} /></div>);
            // routeItem.push(<div><button>{this.state.routes[i]}</button></div>);
        }
        return (
            <div style={styles.routeListBox}>
                <HeaderLogo />
                {routeItem}
                {/* <RouteListItem /> */}
            </div>
        )
    }
}
const graphStyle = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: 'white'
};

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


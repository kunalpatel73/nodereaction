/**
 * ************************************
 *
 * @module  MarketsContainer
 * @author
 * @date
 * @description stateful component that renders MarketCreator and MarketDisplay
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import CountriesDisplay from '../components/CountriesDisplay.jsx';

const mapStateToProps = store => {
  return {countries: store.countries.countriesArr}
};

const mapDispatchToProps = dispatch => ({
  
  getCountries: () => {
    console.log('countries container - dispatch: ' + dispatch);
    actions.getCountries(dispatch)();
  }
});

class CountriesContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.getCountries();
  }

  render() {
    return(
        <div>
            <CountriesDisplay countries={this.props.countries} />
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesContainer);

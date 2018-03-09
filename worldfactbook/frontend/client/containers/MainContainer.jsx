/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that the app
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountriesContainer from './CountriesContainer.jsx';

// totalCards: store.markets.totalCards, totalMarkets: store.markets.totalMarkets

const mapStateToProps = store => {
  return {};// add pertinent state here
};

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
          <h1 id="appTitle">World Factbook</h1>
          <CountriesContainer />
      </div>
    )
  }
}

export default connect(mapStateToProps)(MainContainer);


// <TotalsDisplay totalCards={this.props.totalCards} totalMarkets={this.props.totalMarkets} />
// <MarketsContainer />
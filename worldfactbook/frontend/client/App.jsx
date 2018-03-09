/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import React, { Component } from 'react';
import Wrapper from './containers/MainContainer.jsx';

class App extends Component {
  constructor() {
    super();
    // we removed props from constructor and super
  }

  render() {
    return(
      <Wrapper/>
    )
  }
}

export default App;
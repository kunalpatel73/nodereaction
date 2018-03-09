/**
 * ************************************
 *
 * @module  CountriesDisplay
 * @author
 * @date
 * @description presentation component that renders n CountryDisplay components
 *
 * ************************************
 */

import React from 'react';
import CountryDisplay from './CountryDisplay.jsx';

const CountriesDisplay = (props) => {
  const countryList = props.countries.map((country, i) => {
    return <CountryDisplay key={i} id={i} country={country} />
  });

  return (
    <ul id="countriesContainer" className="countriesContainer">
      {countryList}
    </ul>
  );
};

export default CountriesDisplay;

/**
 * ************************************
 *
 * @module  CountryDisplay
 * @author
 * @date
 * @description presentation component that renders a single container for each country
 *
 * ************************************
 */

import React from 'react';

const CountryDisplay = (props) => {
  
return(
  
  <li className="countryContainer">
    <div>
      <h2>{props.country.name}</h2>
      <div ><img src={props.country.flagUrl} /></div>
      <h3>Background</h3>
      <div className="flagContainer">{props.country.background}</div>
      <h3>Location</h3>
      <div>{props.country.location}</div>
    </div>
  </li>
)};

export default CountryDisplay;

/**
 * ************************************
 *
 * @module  actions index.js
 * @author
 * @date
 * @description actions creators for country information
 *
 * ************************************
 */

import countries from '../api/countries'
import * as types from '../constants/ActionTypes'

const receiveCountries = countries => ({
  type: types.COUNTRIES_VIEW,
  payload: countries
})

export const getCountries = (dispatch) => {
  console.log('getCountries actions.js');
  return () => {
    console.log('getCountries actions.js' + dispatch);
    countries.getCountries(countries => {
      dispatch(receiveCountries(countries))
    }); 
  }
}
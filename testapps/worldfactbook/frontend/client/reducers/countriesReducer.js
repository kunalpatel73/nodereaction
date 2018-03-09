/**
 * ************************************
 *
 * @module  countriesReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

import * as actionTypes from '../constants/actionTypes';

const initialState = {
    countriesArr: []
};

const countriesReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.COUNTRIES_VIEW:
            return {
                ...state,
                countriesArr: action.payload
            };

        case actionTypes.COUNTRIES_FIND:

            return {
                ...state
            };

        default:
            return state;
    }
};

export default countriesReducer;

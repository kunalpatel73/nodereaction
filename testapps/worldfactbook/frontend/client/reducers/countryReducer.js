/**
 * ************************************
 *
 * @module  countryReducer
 * @author
 * @date
 * @description reducer for individual countries
 *
 * ************************************
 */

import * as actionTypes from '../constants/actionTypes';

const initialState = {
    country: name,
};

const countryReducer = (state = initialState, action) => {
    let country = state.country;

    switch (action.type) {
        case actionTypes.COUNTRY_CREATE:

            return {
                ...state
            };

        case actionTypes.COUNTRY_VIEW:

            return {
                ...state
            };

        case actionTypes.COUNTRY_UPDATE:

            return {
                ...state
            };

        case actionTypes.COUNTRY_DELETE:

            return {
                ...state
            };

        case actionTypes.COUNTRY_FIND:

            return {
                ...state
            };

        default:
            return state;
    }
};

export default countryReducer;

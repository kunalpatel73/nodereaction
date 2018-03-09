/**
 * ************************************
 *
 * @module  countries.js
 * @author
 * @date
 * @description api for countries information
 *
 * ************************************
 */

export default {
    // make this the ajax call
    getCountries: (cb) => {

        fetch('/countries/', {
            method: 'GET'
        })
            .then(res => { return res.json() })
            .then(countries => {
                console.log('countries.js - getCountries - fetch sucess', countries);
                cb(countries);
            })
            .catch(error => console.error('Error:', error));
    }
}
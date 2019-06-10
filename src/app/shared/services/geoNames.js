/**
 * GeoNames API service functions.
 *
 * @class GeoNames
 */
export default class GeoNames {
    constructor($http, $ngRedux) {
        this.$http = $http;
        this.baseURL = 'https://secure.geonames.org';
        this.$ngRedux = $ngRedux;
    }

    /**
     * Fetches matching city names results based on a string.
     *
     * @param {string} city - City name to search matches
     * @param {number} [maxRows=5] - Number of matching city names retrieved by the geoNames API
     * @param {string} [style='SHORT'] - Quantity of information we retrieve for each city
     * @param {string} [cities='cities500'] - geoNames API filter for displaying only relevant cities
     * @returns {Object[]} An array containing all the matching cities with it's information
     * @memberof GeoNames
     */
    async getMatches(city, maxRows = 5, style = 'SHORT', cities = 'cities500') {
        const state = this.$ngRedux.getState();
        this.lang = state.main.preferedLanguage;

        const latlongParams = {
            params: {
                name: city,
                cities,
                maxRows,
                style,
                lang: this.lang,
                username: process.env.GEONAMES_API_KEY
            }
        };

        try {
            let cityLatLon = await this.$http.get(`${this.baseURL}/searchJSON`, latlongParams);
            if (cityLatLon.data.totalResultsCount === 0) {
                delete latlongParams.params.cities;
                cityLatLon = await this.$http.get(`${this.baseURL}/searchJSON`, latlongParams);
            }

            return cityLatLon.data.geonames;
        } catch (response) {
            throw response;
        }
    }

    /**
     * Fetches nearby cities relative to a latitude and longitude from geoNames API.
     *
     * @param {Object} city - Object with the latitude and the longitude of the base city
     * @param {number} [maxRows=7] - Max number of nearby cities the API call will retrieve
     * @param {string} [style='SHORT'] - Quantity of information we retrieve for each city
     * @param {number} [radius=30] - Search radius for the nearby cities in kilometers
     * @param {string} [cities='cities500'] - geoNames API filter for displaying only relevant cities
     * @returns {Object[]} An array containing all the nearby cities with it's information
     * @memberof GeoNames
     */
    async getNearbyCities(city, maxRows = 7, style = 'SHORT', radius = 30, cities = 'cities500') {
        const state = this.$ngRedux.getState();
        this.lang = state.main.preferedLanguage;

        const nearbyParams = {
            params: {
                lat: city.lat,
                lng: city.lng,
                cities: cities,
                radius: radius,
                maxRows: maxRows,
                style: style,
                lang: this.lang,
                username: process.env.GEONAMES_API_KEY
            }
        };

        try {
            //Get nearby cities from the last result, shift deletes the last result occurence that always appears on the API call
            const nearbyCities = await this.$http.get(`${this.baseURL}/findNearbyPlaceNameJSON`, nearbyParams);
            nearbyCities.data.geonames.shift();
            return nearbyCities.data.geonames;
        } catch (response) {
            throw response;
        }
    }
}

GeoNames.$inject = ['$http', '$ngRedux'];
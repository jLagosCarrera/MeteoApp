/**
 * OpenWeatherMap API service functions
 *
 * @class OpenWeatherMaps
 */
export default class OpenWeatherMaps {
    constructor($http, $ngRedux) {
        this.$http = $http;
        this.baseURL = 'https://api.openweathermap.org/data/2.5';
        this.$ngRedux = $ngRedux;
    }

    /**
     * Gets current forecast for the given city.
     *
     * @param {Object} city - Object with the latitude and the longitude of the base city
     * @returns {Object} Current forecast for the given city.
     * @memberof OpenWeatherMaps
     */
    async getCurrentForecastCity(city) {
        const state = this.$ngRedux.getState();
        this.lang = state.main.preferedLanguage;

        const params = {
            params: {
                lat: city.lat,
                lon: city.lng,
                units: 'metric',
                lang: this.lang,
                appid: process.env.OPENWEATHERMAP_API_KEY
            }
        };

        try {
            const currentForecast = await this.$http.get(`${this.baseURL}/weather`, params);
            return currentForecast;
        } catch (response) {
            throw response;
        }
    }

    /**
     * Gets 5 day forecasts for the given city.
     *
     * @param {Object} city - Object with the latitude and the longitude of the base city
     * @returns {Object[]} 5 day forecast for the given city.
     * @memberof OpenWeatherMaps
     */
    async getFiveDayForecastCity(city) {
        const state = this.$ngRedux.getState();
        this.lang = state.main.preferedLanguage;

        const params = {
            params: {
                lat: city.lat,
                lon: city.lng,
                units: 'metric',
                lang: this.lang,
                appid: process.env.OPENWEATHERMAP_API_KEY
            }
        };

        try {
            const fiveDayForecast = await this.$http.get(`${this.baseURL}/forecast`, params);
            return fiveDayForecast;
        } catch (response) {
            throw response;
        }
    }
}

OpenWeatherMaps.$inject = ['$http', '$ngRedux'];
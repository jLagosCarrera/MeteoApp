export default class OpenWeatherMaps {

    constructor($http, fiveDayForecast, latestError, currentForecast) {
        this.$http = $http;
        this.fiveDayForecast = fiveDayForecast;
        this.latestError = latestError;
        this.currentForecast = currentForecast;
        this.baseURL = 'https://api.openweathermap.org/data/2.5';
    }

    async getCurrentForecastCity(city) {
        const URL = 'https://api.openweathermap.org/data/2.5/weather';

        const params = {
            params: {
                q: city,
                units: 'metric',
                lang: 'en',
                appid: process.env.OPENWEATHERMAP_API_KEY
            }
        };

        return this.$http.get(URL, params)
            .then((response) => {
                this.currentForecast = response;
            })
            .catch((response) => {
                this.latestError = response;
            });
    };

    async getFiveDayForecastCity(city) {
        const params = {
            params: {
                q: city,
                units: 'metric',
                lang: 'en',
                appid: process.env.OPENWEATHERMAP_API_KEY
            }
        };

        try {
            return await this.$http.get(`${this.baseURL}/forecast`, params).then((response) => {
                this.fiveDayForecast = response;
            });
        } catch (response) {
            this.latestError = response;
        }

        return this.$http.get(`${baseURL}/forecast`, params)
            .then((response) => {
                this.fiveDayForecast = response;
            })
            .catch((response) => {
                this.latestError = response;
            });
    }
}

OpenWeatherMaps.$inject = ['$http', 'fiveDayForecast', 'latestError', 'currentForecast'];
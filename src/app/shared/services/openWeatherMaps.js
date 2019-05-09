export default class OpenWeatherMaps {

    constructor($http, fiveDayForecast, latestError, currentForecast) {
        this.$http = $http;
        this.fiveDayForecast = fiveDayForecast;
        this.latestError = latestError;
        this.currentForecast = currentForecast;
        this.baseURL = 'https://api.openweathermap.org/data/2.5';
    }

    async getCurrentForecastCity(city) {
        const params = {
            params: {
                q: city,
                units: 'metric',
                lang: 'en',
                appid: process.env.OPENWEATHERMAP_API_KEY
            }
        };

        try {
            this.currentForecast = await this.$http.get(`${this.baseURL}/weather`, params);
            return this.currentForecast;
        } catch (response) {
            return this.latestError = response;
        }
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
            this.fiveDayForecast = await this.$http.get(`${this.baseURL}/forecast`, params);
            return this.fiveDayForecast;
        } catch (response) {
            return this.latestError = response;
        }
    }
}

OpenWeatherMaps.$inject = ['$http', 'fiveDayForecast', 'latestError', 'currentForecast'];
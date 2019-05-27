export default class OpenWeatherMaps {
    constructor($http) {
        this.$http = $http;
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
            const currentForecast = await this.$http.get(`${this.baseURL}/weather`, params);
            return currentForecast;
        } catch (response) {
            throw response;
        }
    }

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
            const fiveDayForecast = await this.$http.get(`${this.baseURL}/forecast`, params);
            return fiveDayForecast;
        } catch (response) {
            throw response;
        }
    }
}

OpenWeatherMaps.$inject = ['$http'];
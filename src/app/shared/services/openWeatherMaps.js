export default class OpenWeatherMaps {
    constructor($http) {
        this.$http = $http;
        this.baseURL = 'https://api.openweathermap.org/data/2.5';
    }

    async getCurrentForecastCity(lat, lon) {
        const params = {
            params: {
                lat: lat,
                lon: lon,
                units: 'metric',
                lang: 'en',
                appid: process.env.OPENWEATHERMAP_API_KEY
            }
        };

        try {
            const currentForecast = await this.$http.get(`${this.baseURL}/weather`, params);
            return currentForecast;
        } catch (response) {
            return response;
        }
    }

    async getFiveDayForecastCity(lat, lon) {
        const params = {
            params: {
                lat: lat,
                lon: lon,
                units: 'metric',
                lang: 'en',
                appid: process.env.OPENWEATHERMAP_API_KEY
            }
        };

        try {
            const fiveDayForecast = await this.$http.get(`${this.baseURL}/forecast`, params);
            return fiveDayForecast;
        } catch (response) {
            return response;
        }
    }
}

OpenWeatherMaps.$inject = ['$http'];
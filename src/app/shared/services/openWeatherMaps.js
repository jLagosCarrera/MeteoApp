export default class OpenWeatherMaps {
    constructor($http, fiveDayForecast) {
        this.$http = $http;
        this.fiveDayForecast = fiveDayForecast;
    }

    getActualForecastCity(city) {
        const URL = 'https://api.openweathermap.org/data/2.5/weather';

        const request = {
            method: 'GET',
            url: URL,
            params: {
                q: city,
                units: 'metric',
                lang: 'en',
                appid: process.env.OPENWEATHERMAP_API_KEY
            }
        };

        return this.fiveDayForecast = this.$http(request);
    };

    getFiveDayForecastCity(city) {
        const URL = 'https://api.openweathermap.org/data/2.5/forecast';

        const request = {
            method: 'GET',
            url: URL,
            params: {
                q: city,
                units: 'metric',
                lang: 'en',
                appid: process.env.OPENWEATHERMAP_API_KEY
            }
        };

        return this.fiveDayForecast = this.$http(request);
    }
}

OpenWeatherMaps.$inject = ['$http', 'fiveDayForecast'];
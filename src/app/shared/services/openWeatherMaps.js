export default class OpenWeatherMaps {
    constructor($http) {
        this.$http = $http;
    }

    getActualWeatherPromise(city) {
        const URL = 'http://api.openweathermap.org/data/2.5/weather';

        const request = {
            method: 'GET',
            url: URL,
            params: {
                q: city,
                mode: 'json',
                units: 'metric',
                lang: 'en',
                appid: process.env.OPEN_WEATHER_MAP_APIKEY
            }
        };

        return $http(request);
    };
}

OpenWeatherMaps.$inject = ['$http'];
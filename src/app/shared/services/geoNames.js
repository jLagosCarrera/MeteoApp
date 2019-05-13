export default class OpenWeatherMaps {
    constructor($http) {
        this.$http = $http;
        this.baseURL = 'https://api.openweathermap.org/data/2.5';
    }
}

OpenWeatherMaps.$inject = ['$http'];
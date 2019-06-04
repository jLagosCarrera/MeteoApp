export default class OpenWeatherMaps {
    constructor($http, $ngRedux) {
        this.$http = $http;
        this.baseURL = 'https://api.openweathermap.org/data/2.5';
        this.$ngRedux = $ngRedux;
    }

    async getCurrentForecastCity(city) {
        const state = this.$ngRedux.getState();
        this.lang = state.main.preferedLanguage;

        const params = {
            params: {
                q: city,
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

    async getFiveDayForecastCity(city) {
        const state = this.$ngRedux.getState();
        this.lang = state.main.preferedLanguage;

        const params = {
            params: {
                q: city,
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
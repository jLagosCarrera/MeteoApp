export default class HomePageController {
    constructor($state, latestSearchesUtil, openWeatherMaps) {
        this.$state = $state;
        this.latestSearchesUtil = latestSearchesUtil;
        this.openWeatherMaps = openWeatherMaps;
    }

    $onInit() {
        this.latestSearches = this.latestSearchesUtil.getLatestSearches();
    }

    search() {
        this.latestSearchesUtil.addCity(this.city);
        this.openWeatherMaps.getCurrentForecastCity(this.city);
        this.openWeatherMaps.getFiveDayForecastCity(this.city);
        this.$state.go('search');
    }

    clickCity(city) {
        this.latestSearchesUtil.addCity(city);
        this.openWeatherMaps.getCurrentForecastCity(city);
        this.openWeatherMaps.getFiveDayForecastCity(city);
        this.$state.go('search');
    }
};

HomePageController.$inject = ['$state', 'latestSearchesUtil', 'openWeatherMaps'];
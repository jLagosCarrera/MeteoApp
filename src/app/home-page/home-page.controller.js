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
        console.log(this.openWeatherMaps.getFiveDayForecastCity(this.city));
        this.$state.go('search');
    };
};

HomePageController.$inject = ['$state', 'latestSearchesUtil', 'openWeatherMaps'];
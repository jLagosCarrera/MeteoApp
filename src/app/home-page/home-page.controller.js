export default class HomePageController {
    constructor(latestSearchesUtil, openWeatherMaps) {
        this.latestSearchesUtil = latestSearchesUtil;
        this.openWeatherMaps = openWeatherMaps;
    }

    $onInit() {
        this.latestSearches = this.latestSearchesUtil.getLatestSearches();
    }

    search() {
        this.latestSearchesUtil.addCity(this.city);
        console.log(this.openWeatherMaps.getFiveDayForecastCity(this.city));
    };
};

HomePageController.$inject = ['latestSearchesUtil', 'openWeatherMaps'];
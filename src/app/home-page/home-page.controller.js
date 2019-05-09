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
        //Will do this call on the search page
        //this.openWeatherMaps.getFiveDayForecastCity(this.city);
    }

    clickCity(city) {
        //Will do this call on the search page
        //this.openWeatherMaps.getFiveDayForecastCity(city);
    }
};

HomePageController.$inject = ['latestSearchesUtil', 'openWeatherMaps'];
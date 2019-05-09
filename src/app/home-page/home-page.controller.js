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
        
        //Will do this call on the search page
        //this.openWeatherMaps.getFiveDayForecastCity(this.city);

        this.$state.go('search');
    }

    clickCity(city) {
        //Will do this call on the search page
        //this.openWeatherMaps.getFiveDayForecastCity(city);
    }
};

HomePageController.$inject = ['$state', 'latestSearchesUtil', 'openWeatherMaps'];
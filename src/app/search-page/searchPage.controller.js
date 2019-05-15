export default class SearchPageController {
    constructor(openWeatherMapsService, geoNamesService, latestSearchesUtilService, $timeout, $state) {
        this.openWeatherMapsService = openWeatherMapsService;
        this.geoNamesService = geoNamesService;
        this.latestSearchesUtilService = latestSearchesUtilService;
        this.$timeout = $timeout;
        this.$state = $state;
        this.nearbyCities = [];
    }

    $onInit() {
        if (this.$state.params.city) {
            this.cityParam = this.$state.params.city.toLowerCase();
        }
        this.latestSearches = this.latestSearchesUtilService.getLatestSearches();
        this.latestSearchesUtilService.addCity(this.cityParam, this.latestSearches);

        this.geoNamesService.getNearbyCities(this.cityParam)
            .then((data) => {
                const cities = data.map(city => city.name);
                this.$timeout(() => this.nearbyCities = cities);
            })
            .catch((error) => {
                console.log(error); //TODO on next tickets
            });

        this.openWeatherMapsService.getFiveDayForecastCity(this.cityParam)
            .then((data) => {
                const forecastFiveDays = data.data.list.forEach((hourlyForecast) => {
                    console.log(hourlyForecast);
                });
            })
            .catch((error) => {
                console.log(error); //TODO on next tickets
            });
    }
}

SearchPageController.$inject = ['openWeatherMapsService', 'geoNamesService', 'latestSearchesUtilService', '$timeout', '$state'];
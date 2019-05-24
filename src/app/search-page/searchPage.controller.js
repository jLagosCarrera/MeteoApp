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
                this.filterFiveDayData(data);
            })
            .catch((error) => {
                console.log(error); //TODO on next tickets
            });

        this.openWeatherMapsService.getCurrentForecastCity(this.cityParam)
            .then((data) => {
                this.currentForecast = data.data;
            })
            .catch((error) => {
                console.log(error); //TODO on next tickets
            });
    }

    filterFiveDayData(data) {
        this.todayForecast = [];
        this.fiveDayForecast = new Map();

        data.data.list.forEach((hourlyForecast) => {
            const forecastDay = new Date(hourlyForecast.dt * 1000).getDate();
            if (forecastDay === new Date().getDate()) {
                this.todayForecast.push(hourlyForecast);
            } else {
                const data = this.fiveDayForecast.get(forecastDay) || [];
                data.push(hourlyForecast);
                this.fiveDayForecast.set(forecastDay, data);
            }
        });

        this.fiveDayForecast = Array.from(this.fiveDayForecast.values());
    }
}

SearchPageController.$inject = ['openWeatherMapsService', 'geoNamesService', 'latestSearchesUtilService', '$timeout', '$state'];
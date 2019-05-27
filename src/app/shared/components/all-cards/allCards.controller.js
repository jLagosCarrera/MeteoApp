export default class AllCardsController {
    constructor(openWeatherMapsService, $timeout, routingFunctionsService, $state) {
        this.openWeatherMapsService = openWeatherMapsService;
        this.$timeout = $timeout;
        this.routingFunctionsService = routingFunctionsService;
        this.$state = $state;
    }

    $onInit() {
        if (this.$state.params.city) {
            this.cityParam = this.$state.params.city.toLowerCase();
        }

        this.openWeatherMapsService.getFiveDayForecastCity(this.cityParam)
            .then((data) => {
                this.todayForecast = [];
                this.fiveDayForecast = new Map();

                if (data && data.data && data.data.list) {
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

                    this.$timeout(() => this.fiveDayForecast = Array.from(this.fiveDayForecast.values()));
                }
            })
            .catch((error) => {
                this.routingFunctionsService.goError(error, this.cityParam);
            });

        this.openWeatherMapsService.getCurrentForecastCity(this.cityParam)
            .then((data) => {
                this.$timeout(() => this.currentForecast = data.data);
            })
            .catch((error) => {
                this.routingFunctionsService.goError(error, this.cityParam);
            });
    }
}

AllCardsController.$inject = ['openWeatherMapsService', '$timeout', 'routingFunctionsService', '$state'];
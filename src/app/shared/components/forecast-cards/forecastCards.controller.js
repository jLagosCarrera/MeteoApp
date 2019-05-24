export default class ForecastCardsController {
    constructor(openWeatherMapsService, $timeout, $state) {
        this.openWeatherMapsService = openWeatherMapsService;
        this.$timeout = $timeout;
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

                    this.fiveDayForecast = Array.from(this.fiveDayForecast.values());
                }
            })
            .catch((error) => {
                this.$state.go('searchError');
            });

        this.openWeatherMapsService.getCurrentForecastCity(this.cityParam)
            .then((data) => {
                this.currentForecast = data.data;
            })
            .catch((error) => {
                this.$state.go('searchError');
            });
    }
}

ForecastCardsController.$inject = ['openWeatherMapsService', '$timeout', '$state'];
export default class AllCardsController {
    constructor(openWeatherMapsService, $timeout, routingFunctionsService, $state) {
        this.openWeatherMapsService = openWeatherMapsService;
        this.$timeout = $timeout;
        this.routingFunctionsService = routingFunctionsService;
        this.$state = $state;
    }

    $onInit() {
        if (this.$state.params.cityName && this.$state.params.lat && this.$state.params.lng) {
            this.cityParam = {
                cityName: this.$state.params.cityName,
                lat: this.$state.params.lat,
                lng: this.$state.params.lng
            };
        }

        this.openWeatherMapsService.getFiveDayForecastCity(this.cityParam)
            .then((data) => {
                this.todayForecast = [];
                this.fiveDayForecast = [];

                let auxMap = new Map();
                const currentDate = new Date().getDate();

                //Check for data not falsy.
                if (data && data.data && data.data.list) {
                    //For each of the 40 forecast values we iterate.
                    data.data.list.forEach((hourlyForecast) => {
                        //We check if the day of the forecast is today and we add
                        //it to the todayForecast array.
                        const forecastDay = new Date(hourlyForecast.dt * 1000).getDate();
                        if (forecastDay === currentDate) {
                            this.todayForecast.push(hourlyForecast);
                        } else {
                            //If not, we are gonna take the forecast date and put it as Map key with
                            //its forecast value inside an array.
                            const data = auxMap.get(forecastDay) || [];
                            data.push(hourlyForecast);
                            auxMap.set(forecastDay, data);
                        }
                    });

                    //We finally get an array with all the arrays of then daily forecast.
                    this.$timeout(() => this.fiveDayForecast = Array.from(auxMap.values()));
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

    openDialog(day) {
        console.log(day)
    }
}

AllCardsController.$inject = ['openWeatherMapsService', '$timeout', 'routingFunctionsService', '$state'];
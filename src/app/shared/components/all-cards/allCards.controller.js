export default class AllCardsController {
    constructor(openWeatherMapsService, $timeout, routingFunctionsService, $scope, $state, $rootElement, $mdDialog) {
        this.openWeatherMapsService = openWeatherMapsService;
        this.$timeout = $timeout;
        this.routingFunctionsService = routingFunctionsService;
        this.$scope = $scope;
        this.$state = $state;
        this.$rootElement = $rootElement;
        this.$mdDialog = $mdDialog;
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
        const dialogScope = angular.extend(this.$scope.$new(true), {
            day
        });

        this.$mdDialog.show({
            template: '<detailed-day></detailed-day>',
            scope: dialogScope,
            parent: this.$rootElement,
            targetEvent: event,
            clickOutsideToClose: true,
            escapeToClose: true
        })
    }
}

AllCardsController.$inject = ['openWeatherMapsService', '$timeout', 'routingFunctionsService', '$scope', '$state', '$rootElement', '$mdDialog'];
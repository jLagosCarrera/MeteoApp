export default class ForecastCardController {
    constructor() {

    }

    getRotation() {
        if (this.currentForecast) {
            return `rotate(${this.currentForecast.wind.deg}deg)`;
        }
    }
}

ForecastCardController.$inject = [];
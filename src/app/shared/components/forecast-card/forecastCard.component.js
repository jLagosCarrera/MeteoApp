import controller from './forecastCard.controller';
import template from './forecastCard.component.html';
import './forecastCard.component.scss';

export default {
    controller,
    template,
    bindings: {
        forecastData: '<',
        currentForecast: '<'
    }
};
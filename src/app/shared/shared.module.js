//Angular and Angularmd
import angular from 'angular';

//Values
import latestError from './data/latestError';
import latestSearches from './data/latestSearches';
import fiveDayForecast from './data/fiveDayForecast';
import currentForecast from './data/currentForecast';

//Services
import openWeatherMaps from './services/openWeatherMaps';
import latestSearchesUtil from './services/latestSearchesUtil';
import routingFunctions from './services/routingFunctions';

//Styles
import './styles/pageStyles.scss'

//Components
import webLogo from './components/web-logo/web-logo.component';

export default angular.module('sharedModule', [])
    .value('latestError', latestError)
    .value('latestSearches', latestSearches)
    .value('fiveDayForecast', fiveDayForecast)
    .value('currentForecast', currentForecast)
    .factory('openWeatherMaps', openWeatherMaps)
    .factory('latestSearchesUtil', latestSearchesUtil)
    .factory('routingFunctions', routingFunctions)
    .component('webLogo', webLogo)
    .name;
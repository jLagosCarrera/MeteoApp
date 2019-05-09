//Angular and Angularmd
import angular from 'angular';
import angularMd from 'angular-material';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import angularMessages from 'angular-messages';
import 'angular-material/angular-material.scss';
import 'material-icons/iconfont/material-icons.scss';

//UiRouter and routes
import uiRouter from '@uirouter/angularjs';

//Values
import latestError from './shared/data/latestError';
import latestSearches from './shared/data/latestSearches';
import fiveDayForecast from './shared/data/fiveDayForecast';
import currentForecast from './shared/data/currentForecast';

//Components
import homePage from './home-page/home-page';

//Services
import openWeatherMaps from './shared/services/openWeatherMaps';
import latestSearchesUtil from './shared/services/latestSearchesUtil';

export default angular.module('app', [uiRouter, angularAnimate, angularAria, angularMessages, angularMd])
    .component('homePage', homePage)
    .value('latestError', latestError)
    .value('latestSearches', latestSearches)
    .value('fiveDayForecast', fiveDayForecast)
    .value('currentForecast', currentForecast)
    .factory('openWeatherMaps', openWeatherMaps)
    .factory('latestSearchesUtil', latestSearchesUtil);
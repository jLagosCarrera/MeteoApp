//Angular and Angularmd
import angular from 'angular';
import angularMd from 'angular-material';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import angularMessages from 'angular-messages';

//Styles
import 'angular-material/angular-material.scss';
import 'material-icons/iconfont/material-icons.scss'
import './shared/styles/pageStyles.scss'

//UiRouter and routes
import uiRouter from '@uirouter/angularjs';
import routes from './app.routes';

//Values
import latestError from './shared/data/latestError';
import latestSearches from './shared/data/latestSearches';
import fiveDayForecast from './shared/data/fiveDayForecast';
import currentForecast from './shared/data/currentForecast';

//Components
import homePage from './home-page/home-page';
import searchPage from './search-page/search-page';

//Services
import openWeatherMaps from './shared/services/openWeatherMaps';
import latestSearchesUtil from './shared/services/latestSearchesUtil';
import searchFunctions from './shared/services/searchFunctions';

export default angular.module('app', [uiRouter, angularAnimate, angularAria, angularMessages, angularMd])
    .config(routes)
    .component('homePage', homePage)
    .component('searchPage', searchPage)
    .value('latestError', latestError)
    .value('latestSearches', latestSearches)
    .value('fiveDayForecast', fiveDayForecast)
    .value('currentForecast', currentForecast)
    .factory('openWeatherMaps', openWeatherMaps)
    .factory('latestSearchesUtil', latestSearchesUtil)
    .factory('searchFunctions', searchFunctions);
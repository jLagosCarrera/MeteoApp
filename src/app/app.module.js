//Angular and Angularmd
import angular from 'angular';
import angularmd from 'angular-material';
import angularanimate from 'angular-animate';
import angulararia from 'angular-aria';
import angularmessages from 'angular-messages';
import 'angular-material/angular-material.scss';
import 'material-icons/iconfont/material-icons.scss'
//UiRouter and routes
import uiRouter from '@uirouter/angularjs';


//Values
import latestSearches from './shared/data/latestSearches';
//Components
import homePage from './home-page/home-page';
//Services
import openWeatherMaps from './shared/services/openWeatherMaps';
import latestSearchesUtil from './shared/services/latestSearchesUtil';

export default angular.module('app', [uiRouter, angularanimate, angulararia, angularmessages, angularmd])
    .component('homePage', homePage)
    .value('latestSearches', latestSearches)
    .factory('openWeatherMaps', openWeatherMaps)
    .factory('latestSearchesUtil', latestSearchesUtil);
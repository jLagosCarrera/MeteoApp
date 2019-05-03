//Angular and Angularmd
import angular from 'angular';
import angularmd from 'angular-material';
import angularanimate from 'angular-animate';
import angulararia from 'angular-aria';
import angularmessages from 'angular-messages';
import 'angular-material/angular-material.scss';
//UiRouter and routes
import uiRouter from '@uirouter/angularjs';
import routes from './app.routes';

//Components
import homePage from './home-page/home-page';
//Services
import actualWeather from './shared/services/actualWeather';

export default angular.module('app', [uiRouter, angularanimate, angulararia, angularmessages, angularmd])
    .config(routes)
    .factory('actualWeather', actualWeather)
    .component('homePage', homePage);
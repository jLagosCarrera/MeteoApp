//Modules
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import angularmd from 'angular-material';
import angularanimate from 'angular-animate';
import angulararia from 'angular-aria';
import angularmessages from 'angular-messages';
//Routes
import routes from './app.routes';
//Services
import actualWeather from './shared/services/actualWeather';

export default angular.module('app', [uiRouter, angularanimate, angulararia, angularmessages, angularmd])
    .config(routes)
    .factory('actualWeather', actualWeather);

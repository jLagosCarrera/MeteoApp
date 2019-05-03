import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import routes from './app.routes';
import angularmd from 'angular-material';
import angularanimate from 'angular-animate';
import angulararia from 'angular-aria';
import angularmessages from 'angular-messages';
import appComponent from './component/component';
import helloComponent from './hello/hello';
import worldComponent from './world/world';

export default angular.module('app', [uiRouter, angularanimate, angulararia, angularmessages, angularmd])
    .config(routes)
    .component('hello', helloComponent)
    .component('world', worldComponent)
    .component('app', appComponent);
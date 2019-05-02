import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import routes from './app.routes';
import angularmd from 'angular-material';
import angularanimate from 'angular-animate';
import angulararia from 'angular-aria';
import angularmessages from 'angular-messages';
import appComponent from './app.component';
import helloComponent from './hello/hello';
import worldComponent from './world/world';

const app = angular.module('app', [uiRouter, angularanimate, angulararia, angularmessages, angularmd]);

app.component('hello', helloComponent);
app.component('world', worldComponent);
app.component('app', appComponent);
app.config(routes);
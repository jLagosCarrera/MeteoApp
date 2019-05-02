import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import routes from './app.routes';
import helloComponent from './hello/hello';
import worldComponent from './world/world';

const app = angular.module('app', [uiRouter]);

app.component('hello', helloComponent);
app.component('world', worldComponent);
app.config(routes);
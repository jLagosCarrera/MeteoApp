import angular from 'angular';
import helloComponent from './hello/hello';
import worldComponent from './world/world';

const app = angular.module('app', []);

app.component('hello', helloComponent);
app.component('world', worldComponent);
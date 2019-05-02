import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import helloComponent from './hello/hello';
import worldComponent from './world/world';

const app = angular.module('app', [uiRouter]);

app.component('hello', helloComponent);
app.component('world', worldComponent);

app.config(['$stateProvider', function (provider) {
    var helloState = {
        name: 'hello',
        url: '/hello',
        component: 'hello'
    }

    var constState = {
        name: 'world',
        url: '/world',
        component: 'world'
    }

    provider.state(helloState);
    provider.state(constState);
}]);
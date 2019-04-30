import angular from 'angular';
import angularmd from 'angular-material';
import angularanimate from 'angular-animate';
import angulararia from 'angular-aria';
import appComponent from './app.component';

angular.module('app', [angularmd, angularanimate, angulararia]).component('app', appComponent);
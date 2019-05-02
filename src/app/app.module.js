import angular from 'angular';
import angularmd from 'angular-material';
import angularanimate from 'angular-animate';
import angulararia from 'angular-aria';
import angularmessages from 'angular-messages';
import appComponent from './app.component';

angular.module('app', [angularanimate, angulararia, angularmessages, angularmd]).component('app', appComponent);
//Angular
import angular from 'angular';

//Component
import errorPage from './errorPage.component';

export default angular.module('errorPageModule', [])
    .component('errorPage', errorPage)
    .name;
//Angular
import angular from 'angular';

//Component
import homePage from './homePage.component';

export default angular.module('homePageModule', [])
    .component('homePage', homePage)
    .name;
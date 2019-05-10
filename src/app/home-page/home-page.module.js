//Angular
import angular from 'angular';

//Component
import homePageComponent from './home-page.component';

export default angular.module('homePageModule', [])
    .component('homePageComponent', homePageComponent)
    .name;
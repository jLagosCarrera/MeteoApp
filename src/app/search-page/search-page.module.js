//Angular
import angular from 'angular';

//Component
import searchPageComponent from './search-page.component';

export default angular.module('searchPageModule', [])
    .component('searchPageComponent', searchPageComponent)
    .name;
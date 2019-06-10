//Angular
import angular from 'angular';

//Component
import searchPage from './searchPage.component';

export default angular.module('searchPageModule', [])
    .component('searchPage', searchPage)
    .name;
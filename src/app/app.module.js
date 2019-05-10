//Angular and Angularmd
import angular from 'angular';
import angularMd from 'angular-material';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import angularMessages from 'angular-messages';

//Styles
import 'angular-material/angular-material.scss';
import 'material-icons/iconfont/material-icons.scss';

//UiRouter and routes
import uiRouter from '@uirouter/angularjs';
import routes from './app.routes';

//Modules
import homePageModule from './home-page/home-page.module';
import searchPageModule from './search-page/search-page.module';
import sharedModule from './shared/shared.module';

export default angular.module('app', [
        uiRouter,
        angularAnimate,
        angularAria,
        angularMessages,
        angularMd,

        homePageModule,
        searchPageModule,
        sharedModule
    ])
    .config(routes);
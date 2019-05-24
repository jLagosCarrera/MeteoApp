//Angular, Angularmd ns uiRoutes
import angular from 'angular';
import angularMd from 'angular-material';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import angularMessages from 'angular-messages';
import uiRouter from '@uirouter/angularjs';

//Styles
import 'angular-material/angular-material.scss';
import 'material-icons/iconfont/material-icons.scss';

//Routes for uiRouter
import routes from './app.routes';

//Modules
import homePageModule from './home-page/homePage.module';
import searchPageModule from './search-page/searchPage.module';
import errorPageModule from './error-page/errorPage.module';
import sharedModule from './shared/shared.module';

export default angular.module('app', [
        uiRouter,
        angularAnimate,
        angularAria,
        angularMessages,
        angularMd,

        homePageModule,
        searchPageModule,
        errorPageModule,
        sharedModule
    ])
    .config(routes);
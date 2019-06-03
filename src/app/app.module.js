//Angular and Angularmd
import angular from 'angular';
import angularMd from 'angular-material';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import angularMessages from 'angular-messages';

//Angular translate
import angularTranslate from 'angular-translate';
//Angular translate config
import translations from './app.translate';

//UiRouter
import uiRouter from '@uirouter/angularjs';
//UiRouter config
import routes from './app.routes';

//Angular Redux
import ngRedux from 'ng-redux';
//Angular Redux config
import reduxConfig from './app.redux';

//Title update
import titleUpdate from './app.title'

//Styles
import 'angular-material/angular-material.scss';
import 'material-icons/iconfont/material-icons.scss';

//Modules
import homePageModule from './home-page/homePage.module';
import searchPageModule from './search-page/searchPage.module';
import sharedModule from './shared/shared.module';

export default angular.module('app', [
        angularTranslate,
        angularAnimate,
        angularAria,
        angularMessages,
        angularMd,
        uiRouter,
        ngRedux,

        homePageModule,
        searchPageModule,
        sharedModule
    ])
    .config(translations)
    .config(routes)
    .config(reduxConfig)
    .run(titleUpdate);
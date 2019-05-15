//Angular and Angularmd
import angular from 'angular';

//Services
import openWeatherMaps from './services/openWeatherMaps';
import latestSearchesUtil from './services/latestSearchesUtil';
import routingFunctions from './services/routingFunctions';
import geoNames from './services/geoNames';

//Styles
import './styles/pageStyles.scss'
import './styles/flexStyles.scss'
import './styles/spacingStyles.scss'

//Components
import webLogo from './components/web-logo/webLogo.component';
import citySearch from './components/city-search/citySearch.component';
import displayableList from './components/displayable-list/displayableList.component';

export default angular.module('sharedModule', [])
    .factory('openWeatherMaps', openWeatherMaps)
    .factory('geoNames', geoNames)
    .factory('latestSearchesUtil', latestSearchesUtil)
    .factory('routingFunctions', routingFunctions)
    .component('webLogo', webLogo)
    .component('citySearch', citySearch)
    .component('displayableList', displayableList)
    .name;
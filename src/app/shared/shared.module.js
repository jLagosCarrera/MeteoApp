//Angular and Angularmd
import angular from 'angular';

//Services
import openWeatherMapsService from './services/openWeatherMaps';
import latestSearchesUtilService from './services/latestSearchesUtil';
import routingFunctionsService from './services/routingFunctions';
import geoNamesService from './services/geoNames';

//Styles
import './styles/pageStyles.scss';
import './styles/flexStyles.scss';
import './styles/spacingStyles.scss';

//Components
import webLogo from './components/web-logo/webLogo.component';
import citySearch from './components/city-search/citySearch.component';
import displayableList from './components/displayable-list/displayableList.component';
import forecastCard from './components/forecast-card/forecastCard.component';
import forecastCards from './components/forecast-cards/forecastCards.component';
import progressBar from './components/progress-bar/progressBar.component';
import errorInform from './components/error-inform/errorInform.component';

export default angular.module('sharedModule', [])
    .factory('openWeatherMapsService', openWeatherMapsService)
    .factory('geoNamesService', geoNamesService)
    .factory('latestSearchesUtilService', latestSearchesUtilService)
    .factory('routingFunctionsService', routingFunctionsService)
    .component('webLogo', webLogo)
    .component('citySearch', citySearch)
    .component('displayableList', displayableList)
    .component('forecastCard', forecastCard)
    .component('forecastCards', forecastCards)
    .component('progressBar', progressBar)
    .component('errorInform', errorInform)
    .name;
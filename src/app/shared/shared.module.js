//Angular and Angularmd
import angular from 'angular';

//Services
import openWeatherMapsService from './services/openWeatherMaps';
import routingFunctionsService from './services/routingFunctions';
import geoNamesService from './services/geoNames';
import mailing from './services/mailing';

//Styles
import './styles/pageStyles.scss';
import './styles/flexStyles.scss';
import './styles/spacingStyles.scss';

//Components
import webLogo from './components/web-logo/webLogo.component';
import citySearch from './components/city-search/citySearch.component';
import displayableList from './components/displayable-list/displayableList.component';
import forecastCard from './components/forecast-card/forecastCard.component';
import detailedDay from './components/detailed-day/detailedDay.component';
import allCards from './components/all-cards/allCards.component';
import progressBar from './components/progress-bar/progressBar.component';
import errorInform from './components/error-inform/errorInform.component';
import contactForm from './components/contact-form/contactForm.component';
import languageFab from './components/language-fab/languageFab.component';

//Filters
import capitalize from './filters/capitalize';

export default angular.module('sharedModule', [])
    .service('openWeatherMapsService', openWeatherMapsService)
    .service('geoNamesService', geoNamesService)
    .service('routingFunctionsService', routingFunctionsService)
    .service('mailing', mailing)
    .component('webLogo', webLogo)
    .component('citySearch', citySearch)
    .component('displayableList', displayableList)
    .component('forecastCard', forecastCard)
    .component('detailedDay', detailedDay)
    .component('allCards', allCards)
    .component('progressBar', progressBar)
    .component('errorInform', errorInform)
    .component('contactForm', contactForm)
    .component('languageFab', languageFab)
    .filter('capitalize', () => capitalize)
    .name;
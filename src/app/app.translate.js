import en from '../resources/translations/en';
import es from '../resources/translations/es';

export default ['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en', en);
    $translateProvider.translations('es', es);

    $translateProvider.preferredLanguage('en');
}]
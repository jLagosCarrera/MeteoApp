import en from '../resources/translations/en';
import es from '../resources/translations/es';
import gl from '../resources/translations/gl';

export default ['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en', en);
    $translateProvider.translations('es', es);
    $translateProvider.translations('gl', gl);

    $translateProvider.preferredLanguage('es');
}]
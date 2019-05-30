import en from '../resources/translations/en';
import es from '../resources/translations/es';
import gl from '../resources/translations/gl';

export default ['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en', en);
    $translateProvider.translations('es', es);
    $translateProvider.translations('gl', gl);

    $translateProvider.registerAvailableLanguageKeys(['en', 'es', 'gl'], {
        'en_*': 'en',
        'es_*': 'es',
        'gl_*': 'gl',
        '*': 'en'
    })
    $translateProvider.determinePreferredLanguage();
    $translateProvider.fallbackLanguage('en');
}]
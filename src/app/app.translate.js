import en from '../resources/translations/en';
import es from '../resources/translations/es';
import pt from '../resources/translations/pt';

export default ['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en', en);
    $translateProvider.translations('es', es);
    $translateProvider.translations('pt', pt);

    $translateProvider.registerAvailableLanguageKeys(['en', 'es', 'pt'], {
        'en_*': 'en',
        'es_*': 'es',
        'pt_*': 'pt',
        '*': 'en'
    })

    const preferedLanguage = localStorage.getItem('preferedLanguage');
    if (preferedLanguage) {
        $translateProvider.preferredLanguage(preferedLanguage);
    } else {
        $translateProvider.determinePreferredLanguage();
    }

    $translateProvider.fallbackLanguage('en');
}]
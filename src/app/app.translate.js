import gb from '../resources/translations/gb';
import es from '../resources/translations/es';
import pt from '../resources/translations/pt';

export default ['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('gb', gb);
    $translateProvider.translations('es', es);
    $translateProvider.translations('pt', pt);

    $translateProvider.registerAvailableLanguageKeys(['gb', 'es', 'pt'], {
        'en_*': 'gb',
        'es_*': 'es',
        'pt_*': 'pt',
        '*': 'gb'
    })

    const preferedLanguage = localStorage.getItem('preferedLanguage');
    if (preferedLanguage) {
        $translateProvider.preferredLanguage(preferedLanguage);
    } else {
        $translateProvider.determinePreferredLanguage();
    }

    $translateProvider.fallbackLanguage('gb');
}]
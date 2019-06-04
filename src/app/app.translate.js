export default ['$translateProvider', function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: './resources/translations/',
        suffix: '.json'
    });
    $translateProvider.registerAvailableLanguageKeys(['en', 'es', 'pt'], {
        'en_*': 'en',
        'es_*': 'es',
        'pt_*': 'pt',
        '*': 'en'
    });
    $translateProvider.fallbackLanguage('en');

    const preferedLanguage = localStorage.getItem('preferedLanguage');
    if (preferedLanguage) {
        $translateProvider.use(preferedLanguage);
    } else {
        $translateProvider.determinePreferredLanguage();
    }

    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.forceAsyncReload(true);
}]
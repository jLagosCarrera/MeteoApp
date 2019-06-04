export default ['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/home');

    const homeState = {
        name: 'home',
        url: '/home',
        component: 'homePage',
        resolve: getTitleTranslation('HOME')
    };

    const searchState = {
        name: 'search',
        component: 'searchPage',
        resolve: getTitleTranslation('SEARCH')
    };

    const searchCity = {
        parent: 'search',
        name: 'searchCity',
        url: '/search?city',
        component: 'allCards',
        resolve: getTitleTranslation('SEARCH_CITY')
    }

    const searchError = {
        parent: 'search',
        name: 'searchError',
        url: '/search/error',
        component: 'errorInform',
        resolve: getTitleTranslation('SEARCH_ERROR'),
        params: {
            errorInfo: undefined,
            citySearched: undefined
        }
    }

    $stateProvider.state(homeState);
    $stateProvider.state(searchState);
    $stateProvider.state(searchCity);
    $stateProvider.state(searchError);
}];

function getTitleTranslation(stateName) {
    return {
        $title: ['$translate', ($translate) => {
            return $translate.onReady().then(() => {
                return `${$translate.instant('APP.NAME')} - ${$translate.instant(`APP.STATE.${stateName.toUpperCase()}`)}`;
            })
        }]
    }
}
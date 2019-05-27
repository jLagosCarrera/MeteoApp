export default ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    const homeState = {
        name: 'home',
        url: '/home',
        component: 'homePage'
    };

    const searchState = {
        name: 'search',
        component: 'searchPage'
    };

    const searchCity = {
        parent: 'search',
        name: 'searchCity',
        url: '/search?city',
        component: 'allCards'
    }

    const searchError = {
        parent: 'search',
        name: 'searchError',
        url: '/search/error',
        component: 'errorInform',
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
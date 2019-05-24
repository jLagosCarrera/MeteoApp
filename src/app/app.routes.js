export default ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    const homeState = {
        name: 'home',
        url: '/home',
        component: 'homePage'
    };

    const searchState = {
        name: 'search',
        url: '/search?city',
        component: 'searchPage'
    };

    const errorState = {
        name: 'error',
        url: '/error',
        component: 'errorPage'
    }

    $stateProvider.state(homeState);
    $stateProvider.state(searchState);
    $stateProvider.state(errorState);
}];
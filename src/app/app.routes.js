export default ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    const homeState = {
        name: 'home',
        url: '/home',
        component: 'homePage'
    }

    const searchState = {
        name: 'search',
        url: '/search?city',
        component: 'searchPage'
    }

    $stateProvider.state(homeState);
    $stateProvider.state(searchState);
}];
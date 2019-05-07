export default ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    const homeState = {
        name: 'home',
        url: '/home',
        component: 'homePage'
    }

    const mainState = {
        name: 'search',
        url: '/search',
        component: 'searchPage'
    }

    $stateProvider.state(homeState);
    $stateProvider.state(mainState);
}];
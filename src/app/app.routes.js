export default ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    const homeState = {
        name: 'home',
        url: '/home',
        component: 'homePageComponent'
    }

    const mainState = {
        name: 'search',
        url: '/search?city',
        component: 'searchPageComponent'
    }

    $stateProvider.state(homeState);
    $stateProvider.state(mainState);
}];
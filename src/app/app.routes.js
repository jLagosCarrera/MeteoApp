export default ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    const homeState = {
        name: 'home',
        url: '/home',
        component: 'homePageComponent'
    }

    const mainState = {
        name: 'search',
        url: '/search',
        component: 'searchPageComponent'
    }

    $stateProvider.state(homeState);
    $stateProvider.state(mainState);
}];
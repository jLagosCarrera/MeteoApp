export default class RoutingFunctions {
    constructor($state, latestSearchesUtil) {
        this.$state = $state;
        this.latestSearchesUtil = latestSearchesUtil;
    }

    search(city, cities) {
        if (this.latestSearchesUtil.addCity(city, cities)) {
            this.$state.go('search');
        }
    }

    goHome() {
        this.$state.go('home');
    }
}

RoutingFunctions.$inject = ['$state', 'latestSearchesUtil'];
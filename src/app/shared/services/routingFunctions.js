export default class RoutingFunctions {
    constructor($state, latestSearchesUtil) {
        this.$state = $state;
        this.latestSearchesUtil = latestSearchesUtil;
    }

    search(city) {
        if (this.latestSearchesUtil.addCity(city)) {
            this.$state.go('search');
        }
    }

    goHome() {
        this.$state.go('home');
    }
}

RoutingFunctions.$inject = ['$state', 'latestSearchesUtil'];
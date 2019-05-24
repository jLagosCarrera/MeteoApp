export default class RoutingFunctions {
    constructor($state) {
        this.$state = $state;
    }

    search(city) {
        this.$state.go('searchCity', {
            city: city.toLowerCase()
        });
    }

    goHome() {
        this.$state.go('home');
    }
}

RoutingFunctions.$inject = ['$state'];
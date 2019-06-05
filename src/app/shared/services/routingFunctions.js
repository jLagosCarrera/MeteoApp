export default class RoutingFunctions {
    constructor($state) {
        this.$state = $state;
    }

    search(city) {
        this.$state.go('searchCity', {
            cityName: city.name.toLowerCase().trim(),
            lat: city.lat,
            lng: city.lng
        }, {
            reload: true
        });
    }

    goHome() {
        this.$state.go('home');
    }

    goError(error, city) {
        this.$state.go('searchError', {
            errorInfo: error,
            citySearched: city
        });
    }
}

RoutingFunctions.$inject = ['$state'];
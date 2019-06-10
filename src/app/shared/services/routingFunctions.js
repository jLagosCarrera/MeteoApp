/**
 * Service for handling application routing state.
 *
 * @class RoutingFunctions
 */
export default class RoutingFunctions {
    /**
     * Creates an instance of RoutingFunctions and injects needed dependencies.
     * 
     * @param {*} $state - State service of uiRouter
     * @memberof RoutingFunctions
     */
    constructor($state) {
        this.$state = $state;
    }

    /**
     * Changes state to searchCity sending through query parameters the searched city.
     *
     * @param {*} city - City searched with latitude and longitude
     * @memberof RoutingFunctions
     */
    search(city) {
        this.$state.go('searchCity', {
            cityName: (city.name || city.cityName).toLowerCase().trim(),
            lat: city.lat,
            lng: city.lng
        }, {
            reload: true
        });
    }

    /**
     * Changes state to home.
     *
     * @memberof RoutingFunctions
     */
    goHome() {
        this.$state.go('home');
    }

    /**
     * Changes state to error with the given information.
     *
     * @param {*} error - Error to display
     * @param {*} city - City to search again if needed
     * @memberof RoutingFunctions
     */
    goError(error, city) {
        this.$state.go('searchError', {
            errorInfo: error,
            citySearched: city
        });
    }
}

RoutingFunctions.$inject = ['$state'];
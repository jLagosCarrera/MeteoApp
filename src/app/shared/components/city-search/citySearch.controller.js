export default class CitySearchController {
    constructor(routingFunctions, latestSearchesUtil) {
        this.routingFunctions = routingFunctions;
        this.latestSearches = latestSearchesUtil.getLatestSearches();
    }

    search(city, cities) {
        this.routingFunctions.search(city, cities);
    }
}

CitySearchController.$inject = ['routingFunctions', 'latestSearchesUtil'];
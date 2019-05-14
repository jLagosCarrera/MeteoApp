export default class CitySearchController {
    constructor(routingFunctions, latestSearchesUtil) {
        this.routingFunctions = routingFunctions;
        this.latestSearches = latestSearchesUtil.getLatestSearches();
    }
}

CitySearchController.$inject = ['routingFunctions', 'latestSearchesUtil'];
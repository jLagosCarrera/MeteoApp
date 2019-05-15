export default class CitySearchController {
    constructor(routingFunctionsService, latestSearchesUtilService) {
        this.routingFunctionsService = routingFunctionsService;
        this.latestSearches = latestSearchesUtilService.getLatestSearches();
    }

    search(city, cities) {
        this.routingFunctionsService.search(city, cities);
    }
}

CitySearchController.$inject = ['routingFunctionsService', 'latestSearchesUtilService'];
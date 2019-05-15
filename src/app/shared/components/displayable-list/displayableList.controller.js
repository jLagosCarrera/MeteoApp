export default class DisplayableListController {
    constructor(routingFunctionsService, latestSearchesUtilService) {
        this.routingFunctionsService = routingFunctionsService;
        this.latestSearches = latestSearchesUtilService.getLatestSearches();
    }

    search(city, cities) {
        this.routingFunctionsService.search(city, cities);
    }
}

DisplayableListController.$inject = ['routingFunctionsService', 'latestSearchesUtilService'];
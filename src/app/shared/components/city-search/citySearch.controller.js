export default class CitySearchController {
    constructor(routingFunctionsService) {
        this.routingFunctionsService = routingFunctionsService;
    }

    search(city) {
        this.routingFunctionsService.search(city);
    }
}

CitySearchController.$inject = ['routingFunctionsService'];
export default class DisplayableListController {
    constructor(routingFunctionsService) {
        this.routingFunctionsService = routingFunctionsService;
    }

    search(city) {
        this.routingFunctionsService.search(city);
    }
}

DisplayableListController.$inject = ['routingFunctionsService'];
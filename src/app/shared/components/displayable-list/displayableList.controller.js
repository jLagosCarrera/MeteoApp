export default class DisplayableListController {
    constructor(routingFunctionsService) {
        this.routingFunctionsService = routingFunctionsService;
    }

    search(city) {
        this.routingFunctionsService.search(city);
    }

    deleteItem(city, $event) {
        $event.stopPropagation();
        const index = this.listToDisplay.indexOf(city);
        if (index > -1) {
            this.listToDisplay.splice(index, 1);
        }
    }
}

DisplayableListController.$inject = ['routingFunctionsService'];
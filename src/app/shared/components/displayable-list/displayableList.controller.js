export default class DisplayableListController {
    constructor(routingFunctions, latestSearchesUtil) {
        this.routingFunctions = routingFunctions;
        this.latestSearches = latestSearchesUtil.getLatestSearches();
    }
}

DisplayableListController.$inject = ['routingFunctions', 'latestSearchesUtil'];
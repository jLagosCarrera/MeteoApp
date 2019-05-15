export default class DisplayableListController {
    constructor(routingFunctions, latestSearchesUtil) {
        this.routingFunctions = routingFunctions;
        this.latestSearches = latestSearchesUtil.getLatestSearches();
    }
    
    search(city, cities) {
        this.routingFunctions.search(city, cities);
    }
}

DisplayableListController.$inject = ['routingFunctions', 'latestSearchesUtil'];
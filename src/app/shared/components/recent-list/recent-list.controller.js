export default class RecentListController {
    constructor(routingFunctions, latestSearchesUtil) {
        this.routingFunctions = routingFunctions;
        this.latestSearches = latestSearchesUtil.getLatestSearches();
    }
}

RecentListController.$inject = ['routingFunctions', 'latestSearchesUtil'];
export default class HomePageController {
    constructor(routingFunctions, latestSearchesUtil) {
        this.routingFunctions = routingFunctions;
        this.latestSearchesUtil = latestSearchesUtil;
    }

    $onInit() {
        this.latestSearches = this.latestSearchesUtil.getLatestSearches();
    }
}

HomePageController.$inject = ['routingFunctions', 'latestSearchesUtil'];
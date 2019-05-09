export default class HomePageController {
    constructor(searchFunctions, latestSearchesUtil) {
        this.searchFunctions = searchFunctions;
        this.latestSearchesUtil = latestSearchesUtil;
    }

    $onInit() {
        this.latestSearches = this.latestSearchesUtil.getLatestSearches();
    }
}

HomePageController.$inject = ['searchFunctions', 'latestSearchesUtil'];
export default class SearchPageController {
    constructor(searchFunctions, latestSearchesUtil) {
        this.searchFunctions = searchFunctions;
        this.latestSearchesUtil = latestSearchesUtil;
    }

    $onInit() {
        this.latestSearches = this.latestSearchesUtil.getLatestSearches();
    }
}

SearchPageController.$inject = ['searchFunctions', 'latestSearchesUtil'];

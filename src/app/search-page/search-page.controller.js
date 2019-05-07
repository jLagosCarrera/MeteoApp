export default class SearchPageController {
    constructor(latestSearchesUtil) {
        this.latestSearchesUtil = latestSearchesUtil;
    }

    $onInit() {
        this.latestSearches = this.latestSearchesUtil.getLatestSearches();
    }
}

SearchPageController.$inject = ['latestSearchesUtil'];
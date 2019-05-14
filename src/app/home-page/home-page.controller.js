export default class HomePageController {
    constructor(latestSearchesUtil) {
        this.latestSearchesUtil = latestSearchesUtil;
    }

    $onInit() {
        this.latestSearches = this.latestSearchesUtil.getLatestSearches();
    }
}

HomePageController.$inject = ['latestSearchesUtil'];
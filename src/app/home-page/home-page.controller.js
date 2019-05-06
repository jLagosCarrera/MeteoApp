export default class HomePageController {
    constructor(latestSearches, latestSearchesUtil) {
        this.latestSearches = latestSearches;
        this.latestSearchesUtil = latestSearchesUtil;
    }

    $onInit() {
        this.latestSearches = this.latestSearchesUtil.getLatestSearches();
    }

    search() {
        this.latestSearchesUtil.saveLatestSearches(this.latestSearches, this.city);
    };
};

HomePageController.$inject = ['latestSearches', 'latestSearchesUtil'];
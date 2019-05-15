export default class HomePageController {
    constructor(latestSearchesUtilService) {
        this.latestSearchesUtilService = latestSearchesUtilService;
    }

    $onInit() {
        this.latestSearches = this.latestSearchesUtilService.getLatestSearches();
    }
}

HomePageController.$inject = ['latestSearchesUtilService'];
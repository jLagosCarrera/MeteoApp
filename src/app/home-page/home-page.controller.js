export default class HomePageController {
    constructor($state, latestSearchesUtil) {
        this.$state = $state;
        this.latestSearchesUtil = latestSearchesUtil;
    }

    $onInit() {
        this.latestSearches = this.latestSearchesUtil.getLatestSearches();
    }

    search(city) {
        if (this.latestSearchesUtil.addCity(city)) {
            this.$state.go('search');
        }
    }
}

HomePageController.$inject = ['$state', 'latestSearchesUtil'];
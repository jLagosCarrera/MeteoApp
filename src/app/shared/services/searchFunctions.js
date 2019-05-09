export default class SearchFunctions {
    constructor($state, latestSearchesUtil) {
        this.$state = $state;
        this.latestSearchesUtil = latestSearchesUtil;
    }

    search(city) {
        if (this.latestSearchesUtil.addCity(city)) {
            this.$state.go('search');
        }
    }
}

SearchFunctions.$inject = ['$state', 'latestSearchesUtil'];
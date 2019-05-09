export default class SearchFunctions {
    constructor($state, latestSearches) {
        this.$state = $state;
        this.latestSearches = latestSearches;
    }

    search(city) {
        this.latestSearchesUtil.addCity(city);
        this.$state.go('search');
    }

    clickCity(city) {
        this.latestSearchesUtil.addCity(city);
        this.$state.go('search');
    }
}

SearchFunctions.$inject = ['$state', 'latestSearches'];
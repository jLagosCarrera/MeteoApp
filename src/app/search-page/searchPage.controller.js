export default class SearchPageController {
    constructor(geoNamesService, latestSearchesUtilService, $timeout, $state) {
        this.geoNamesService = geoNamesService;
        this.latestSearchesUtilService = latestSearchesUtilService;
        this.$timeout = $timeout;
        this.$state = $state;
        this.nearbyCities = [];
    }

    $onInit() {
        if (this.$state.params.city) {
            this.cityParam = this.$state.params.city.toLowerCase();
        }

        this.latestSearches = this.latestSearchesUtilService.getLatestSearches();
        this.latestSearchesUtilService.addCity(this.cityParam, this.latestSearches);

        this.geoNamesService.getNearbyCities(this.cityParam)
            .then((data) => {
                const cities = data.map(city => city.name);
                this.$timeout(() => this.nearbyCities = cities);
            })
            .catch((error) => {
                this.$state.go('searchError', {
                    errorInfo: error,
                    citySearched: this.cityParam
                });
            });
    }
}

SearchPageController.$inject = ['geoNamesService', 'latestSearchesUtilService', '$timeout', '$state'];
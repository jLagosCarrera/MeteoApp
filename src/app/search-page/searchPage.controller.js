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
                this.nearbyCities = cities;
            })
            .catch((error) => {
                console.log(error); //TODO on next tickets
            });
    }
}

SearchPageController.$inject = ['geoNamesService', 'latestSearchesUtilService', '$timeout', '$state'];
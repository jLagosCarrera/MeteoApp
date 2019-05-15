export default class SearchPageController {
    constructor(geoNames, latestSearchesUtil, $timeout, $state) {
        this.geoNames = geoNames;
        this.latestSearchesUtil = latestSearchesUtil;
        this.$timeout = $timeout;
        this.$state = $state;
        this.nearbyCities = [];
    }

    $onInit() {
        if (this.$state.params.city) {
            this.cityParam = this.$state.params.city.toLowerCase();
        }
        this.latestSearches = this.latestSearchesUtil.getLatestSearches();
        this.latestSearchesUtil.addCity(this.cityParam, this.latestSearches);

        this.geoNames.getNearbyCities(this.cityParam)
            .then((data) => {
                const cities = data.map(city => city.name);
                this.$timeout(() => this.nearbyCities = cities);
            })
            .catch((error) => {
                //Send user to error page on the future or do somethings (On next tickets).
            });
    }
}

SearchPageController.$inject = ['geoNames', 'latestSearchesUtil', '$timeout', '$state'];
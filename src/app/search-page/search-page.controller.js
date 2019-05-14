export default class SearchPageController {
    constructor(geoNames, latestSearchesUtil) {
        this.geoNames = geoNames;
        this.latestSearchesUtil = latestSearchesUtil;
    }

    $onInit() {
        this.nearbyCities = [];
        this.latestSearches = this.latestSearchesUtil.getLatestSearches();
        this.geoNames.getNearbyCities(this.latestSearches[0])
            .then((data) => {
                const cities = data.map(city => city.name);
                this.nearbyCities = cities;
            })
            .catch((error) => {
                //Send user to error page on the future or do somethings (On next tickets).
            });
    }
}

SearchPageController.$inject = ['geoNames', 'latestSearchesUtil'];
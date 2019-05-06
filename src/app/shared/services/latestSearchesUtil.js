export default class LatestSearchesUtil {
    constructor($window, latestSearches) {
        this.$window = $window;
        this.latestSearches = latestSearches;
    }

    getLatestSearches() {
        return this.latestSearches = JSON.parse(this.$window.localStorage.getItem('latestSearches')) || [];
    };

    addCity(city) {
        if (city == undefined || city == null || city.trim() === '' || this.latestSearches.includes(city)) {
            return;
        }

        if (city === this.latestSearches[0]) {
            return;
        }

        this.latestSearches.unshift(city);
        if (this.latestSearches.length > 10) {
            this.latestSearches.splice(10, this.latestSearches.length - 10);
        }

        this.$window.localStorage.setItem('latestSearches', JSON.stringify(this.latestSearches));
    }
}

LatestSearchesUtil.$inject = ['$window', 'latestSearches'];
export default class LatestSearchesUtil {
    constructor($window, latestSearches) {
        this.$window = $window;
        this.latestSearches = latestSearches;
    }

    getLatestSearches() {
        return this.latestSearches = JSON.parse(this.$window.localStorage.getItem('latestSearches')) || [];
    };

    addCity(rawCity) {
        let city = rawCity.charAt(0).toUpperCase() + rawCity.slice(1).toLowerCase();

        if (city == undefined || city == null || city.trim() === '') {
            return;
        }

        if (this.latestSearches.includes(city)) {
            let index = this.latestSearches.indexOf(city);
            if (index > -1) {
                this.latestSearches.splice(index, 1);
            }
        }

        this.latestSearches.unshift(city);
        if (this.latestSearches.length > 10) {
            this.latestSearches.splice(10, this.latestSearches.length - 10);
        }

        this.$window.localStorage.setItem('latestSearches', JSON.stringify(this.latestSearches));
    }
}

LatestSearchesUtil.$inject = ['$window', 'latestSearches'];
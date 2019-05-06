export default class LatestSearchesUtil {
    constructor($window) {
        this.$window = $window;
    }

    getLatestSearches() {
        return JSON.parse(this.$window.localStorage.getItem('latestSearches')) || [];
    };

    saveLatestSearches(latestSearches, city) {
        if (city == undefined || city == null || city.trim() === '' || latestSearches.includes(city)) {
            return;
        }

        if (city === latestSearches[0]) {
            return;
        }

        latestSearches.unshift(city);
        if (latestSearches.length > 10) {
            latestSearches.splice(10, latestSearches.length - 10);
        }

        this.$window.localStorage.setItem('latestSearches', JSON.stringify(latestSearches));
    }
}

LatestSearchesUtil.$inject = ['$window'];
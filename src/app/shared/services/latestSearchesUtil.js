export default class LatestSearchesUtil {
    constructor(latestSearches) {
        this.latestSearches = latestSearches;
    }

    getLatestSearches() {
        return this.latestSearches = JSON.parse(localStorage.getItem('latestSearches')) || [];
    };

    addCity(city) {
        if (!city || city.trim() === '' || this.latestSearches.includes(city)) {
            return;
        }

        this.latestSearches.unshift(city);
        if (this.latestSearches.length > 10) {
            this.latestSearches.splice(10, this.latestSearches.length - 10);
        }

        localStorage.setItem('latestSearches', JSON.stringify(this.latestSearches));
    }
}

LatestSearchesUtil.$inject = ['latestSearches'];
export default class LatestSearchesUtil {
    constructor(latestSearches) {
        this.latestSearches = latestSearches;
    }

    getLatestSearches() {
        return this.latestSearches = JSON.parse(localStorage.getItem('latestSearches')) || [];
    };

    addCity(city) {
        if (!city || city.trim() === '') {
            return false;
        }

        city = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
        if (this.latestSearches.includes(city)) {
            const index = this.latestSearches.indexOf(city);
            if (index > -1) {
                this.latestSearches.splice(index, 1);
            }
        }

        this.latestSearches.unshift(city);
        if (this.latestSearches.length > 12) {
            this.latestSearches.splice(12, this.latestSearches.length - 12);
        }

        localStorage.setItem('latestSearches', JSON.stringify(this.latestSearches));
        return true;
    }
}

LatestSearchesUtil.$inject = ['latestSearches'];
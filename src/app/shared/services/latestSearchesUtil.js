export default class LatestSearchesUtil {
    constructor(latestSearches) {
        this.latestSearches = latestSearches;
    }

    getLatestSearches() {
        return this.latestSearches = JSON.parse(localStorage.getItem('latestSearches')) || [];
    };

    addCity(rawCity) {
        let city = rawCity.charAt(0).toUpperCase() + rawCity.slice(1).toLowerCase();

        if (!city || city.trim() === '') {
            return;
        }

        if (this.latestSearches.includes(city)) {
            let index = this.latestSearches.indexOf(city);
            if (index > -1) {
                this.latestSearches.splice(index, 1);
            }
        }

        this.latestSearches.unshift(city);
        if (this.latestSearches.length > 12) {
            this.latestSearches.splice(12, this.latestSearches.length - 12);
        }

        localStorage.setItem('latestSearches', JSON.stringify(this.latestSearches));
    }
}

LatestSearchesUtil.$inject = ['latestSearches'];
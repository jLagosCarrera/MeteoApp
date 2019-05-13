export default class LatestSearchesUtil {
    getLatestSearches() {
        return JSON.parse(localStorage.getItem('latestSearches')) || [];
    };

    addCity(city, cities) {
        if (!city || city.trim() === '') {
            return false;
        }

        city = city.trim().toLowerCase();
        if (cities.includes(city)) {
            const index = cities.indexOf(city);
            if (index > -1) {
                cities.splice(index, 1);
            }
        }

        if (cities.includes(city)) {
            let index = cities.indexOf(city);
            if (index > -1) {
                cities.splice(index, 1);
            }
        }

        cities.unshift(city);
        if (cities.length > 12) {
            cities.splice(12, cities.length - 12);
        }

        localStorage.setItem('latestSearches', JSON.stringify(cities));
        return true;
    }
}
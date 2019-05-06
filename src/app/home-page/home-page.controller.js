export default class HomePageController {
    constructor($window) {
        this.latestSearches = JSON.parse($window.localStorage.getItem('latestSearches')) || [];
        this.search = () => {
            let latestSearches = this.latestSearches;
            //Checks input is filled correctly
            if (this.city == undefined || this.city == null || this.city.trim() === '') {
                return;
            }

            latestSearches.unshift(this.city);
            if (latestSearches.length > 10) {
                latestSearches.splice(10, latestSearches.length - 10);
            }

            $window.localStorage.setItem('latestSearches', JSON.stringify(latestSearches));
        };
    }
};

HomePageController.$inject = ['$window']; 
export default class SearchPageController {
    constructor(geoNamesService, latestSearchesUtilService, $timeout, routingFunctionsService, $state, $mdDialog, $rootElement, $mdToast) {
        this.geoNamesService = geoNamesService;
        this.latestSearchesUtilService = latestSearchesUtilService;
        this.$timeout = $timeout;
        this.routingFunctionsService = routingFunctionsService;
        this.nearbyCities = [];
        this.$mdDialog = $mdDialog;
        this.$rootElement = $rootElement;
        this.$state = $state;
        this.$mdToast = $mdToast;
    }

    $onInit() {
        if (this.$state.params.city) {
            this.cityParam = this.$state.params.city.toLowerCase();
        }

        this.latestSearches = this.latestSearchesUtilService.getLatestSearches();
        this.latestSearchesUtilService.addCity(this.cityParam, this.latestSearches);

        this.geoNamesService.getNearbyCities(this.cityParam)
            .then((data) => {
                const cities = data.map(city => city.name);
                this.$timeout(() => this.nearbyCities = cities);
            })
            .catch((error) => {
                this.routingFunctionsService.goError(error, this.cityParam);
            });
    }

    openFormDialog(event) {
        this.$mdDialog.show({
                template: '<contact-form></contact-form>',
                parent: this.$rootElement,
                targetEvent: event,
                clickOutsideToClose: true,
                escapeToClose: true
            })
            .then((answer) => {
                //Implement here email sending service, bottom toast on mail sending
                //add another toast for email error sending
                console.log(answer);
                this.$mdToast.show(
                    this.$mdToast.simple()
                    .textContent('We will contact you soon!')
                    .position('bottom right')
                    .theme('success-toast')
                    .hideDelay(3000)
                );
            })
    }
}

SearchPageController.$inject = ['geoNamesService', 'latestSearchesUtilService', '$timeout', 'routingFunctionsService', '$state', '$mdDialog', '$rootElement', '$mdToast'];
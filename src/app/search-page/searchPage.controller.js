import {
    addCity
} from '../redux/actions';

export default class SearchPageController {
    constructor(geoNamesService, routingFunctionsService, $state, $mdDialog, $rootElement, $ngRedux, mailingService) {
        this.$mdDialog = $mdDialog;
        this.$rootElement = $rootElement;
        this.$state = $state;
        this.$ngRedux = $ngRedux;

        this.geoNamesService = geoNamesService;
        this.routingFunctionsService = routingFunctionsService;
        this.mailingService = mailingService;

        this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis)(this);
        this.nearbyCities = [];
    }

    $onInit() {
        if (this.$state.params.cityName && this.$state.params.lat && this.$state.params.lng) {
            this.cityParam = {
                cityName: this.$state.params.cityName,
                lat: this.$state.params.lat,
                lng: this.$state.params.lng
            };
            this.$ngRedux.dispatch(addCity(this.cityParam));
        }

        this.geoNamesService.getNearbyCities(this.cityParam)
            .then((data) => {
                const cities = data.map(city => {
                    return {
                        cityName: city.name,
                        lat: city.lat,
                        lng: city.lng
                    }
                });
                this.nearbyCities = cities;
            })
            .catch((error) => {
                this.routingFunctionsService.goError(error, this.cityParam);
            });
    }

    $onDestroy() {
        this.unsubscribe();
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
                this.mailingService.contact(answer);
            })
    }

    mapStateToThis(state) {
        return {
            latestSearches: state.main.cities
        };
    }
}

SearchPageController.$inject = ['geoNamesService', 'routingFunctionsService', '$state', '$mdDialog', '$rootElement', '$ngRedux', 'mailingService'];
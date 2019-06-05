import {
    setCities
} from '../../../redux/actions';

export default class DisplayableListController {
    constructor(routingFunctionsService, $ngRedux) {
        this.routingFunctionsService = routingFunctionsService;
        this.$ngRedux = $ngRedux;
    }

    search(city) {
        this.routingFunctionsService.search(city);
    }

    deleteItem(cityDel, $event) {
        $event.stopPropagation();
        const index = this.listToDisplay.findIndex(city => {
            return cityDel.cityName.toLowerCase().trim() === city.cityName &&
                cityDel.lat === city.lat &&
                cityDel.lng === city.lng;
        });
        if (index > -1) {
            this.listToDisplay.splice(index, 1);
            this.$ngRedux.dispatch(setCities(this.listToDisplay));
        }
    }
}

DisplayableListController.$inject = ['routingFunctionsService', '$ngRedux'];
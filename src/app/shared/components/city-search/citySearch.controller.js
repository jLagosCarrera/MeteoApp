export default class CitySearchController {
    constructor(routingFunctionsService, geoNamesService) {
        this.routingFunctionsService = routingFunctionsService;
        this.geoNamesService = geoNamesService;
        this.geoNamesService.getMatches('Vigo').then((data) => {
                this.matches = data;
            })
            .catch((error) => {
                this.routingFunctionsService.goError(error, 'Vigo');
            });
    }

    search(city) {
        this.routingFunctionsService.search(city);
    }
}

CitySearchController.$inject = ['routingFunctionsService', 'geoNamesService'];
export default class CitySearchController {
    constructor(routingFunctionsService, geoNamesService) {
        this.routingFunctionsService = routingFunctionsService;
        this.geoNamesService = geoNamesService;
        this.matches = [];
    }

    search(city) {
        if (city) {
            this.routingFunctionsService.search(city);
        }
    }

    searchForm() {
        this.search(this.matches[0]);
    }

    queryMatches(cityTyping) {
        if (cityTyping && cityTyping.length > 2) {
            return this.geoNamesService.getMatches(cityTyping).then((data) => {
                    return this.matches = data;
                })
                .catch((error) => {
                    return this.matches = [];
                });
        } else {
            return this.matches = [];
        }
    }

    update(cityTyping) {
        if (!cityTyping || cityTyping.length <= 2) {
            return this.matches = [];
        }
    }
}

CitySearchController.$inject = ['routingFunctionsService', 'geoNamesService'];
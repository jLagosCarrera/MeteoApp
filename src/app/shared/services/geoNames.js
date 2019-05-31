export default class GeoNames {
    constructor($http, $ngRedux) {
        this.$http = $http;
        this.baseURL = 'https://secure.geonames.org';
        this.$ngRedux = $ngRedux;
        $ngRedux.subscribe(() => {
            const state = $ngRedux.getState();
            this.lang = state.main.preferedLanguage;
        });
    }

    //maxRows -> Number of JSON objects returned (cities)
    //cities ('cities500','cities1000','cities5000','cities15000') -> Minimum quantity of population filter
    //style ('SHORT','MEDIUM','LONG','FULL') -> Quantity of data retrieved
    async getNearbyCities(city, maxRows = 7, style = 'SHORT', radius = 30, cities = 'cities500') {
        const latlongParams = {
            params: {
                q: city,
                name: city,
                cities: cities,
                style: style,
                lang: this.lang,
                username: process.env.GEONAMES_API_KEY
            }
        };

        const nearbyParams = {
            params: {
                lat: 0,
                lng: 0,
                cities: cities,
                radius: radius,
                maxRows: maxRows,
                style: style,
                lang: this.lang,
                username: process.env.GEONAMES_API_KEY
            }
        };


        try {
            //Get latitude and longitude from last result
            let cityLatLon = await this.$http.get(`${this.baseURL}/searchJSON`, latlongParams);
            if (cityLatLon.data.totalResultsCount === 0) {
                delete latlongParams.params.cities;
                cityLatLon = await this.$http.get(`${this.baseURL}/searchJSON`, latlongParams);
            }
            nearbyParams.params.lat = cityLatLon.data.geonames[0].lat;
            nearbyParams.params.lng = cityLatLon.data.geonames[0].lng;

            //Get nearby cities from the last result, shift deletes the last result occurence that always appears on the API call
            const nearbyCities = await this.$http.get(`${this.baseURL}/findNearbyPlaceNameJSON`, nearbyParams);
            nearbyCities.data.geonames.shift();
            return nearbyCities.data.geonames;
        } catch (response) {
            throw response;
        }
    }
}

GeoNames.$inject = ['$http', '$ngRedux'];
export default class AppComponentController {
    constructor(weatherService) {
        this.logFetch = () => {            
            weatherService
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (response) {
                console.log(response.data);
            });
        }
    }
};
AppComponentController.$inject = ['weatherService'];
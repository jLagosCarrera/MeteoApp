export default class AppComponentController {
    static get $inject() {
        return ['$scope', 'weatherService'];
    }

    constructor($scope, weatherService) {
        $scope.logFetch = () => {
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
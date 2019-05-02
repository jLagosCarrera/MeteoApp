import template from './app.component.html';
import './app.component.css';

AppComponentController.$inject = ['$scope', 'weatherService'];

function AppComponentController($scope, weatherService) {
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

const AppComponent = {
    template: template,
    controller: AppComponentController
};

export default AppComponent;
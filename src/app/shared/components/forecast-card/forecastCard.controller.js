export default class ForecastCardController {
    constructor($scope, $rootElement, $mdDialog) {
        this.$scope = $scope;
        this.$rootElement = $rootElement;
        this.$mdDialog = $mdDialog;
    }

    getRotation() {
        if (this.currentForecast) {
            return `rotate(${this.currentForecast.wind.deg}deg)`;
        }
    }

    openDialog(day) {
        const dialogScope = angular.extend(this.$scope.$new(true), {
            day
        });

        this.$mdDialog.show({
            template: `<detailed-day></detailed-day>`,
            scope: dialogScope,
            parent: this.$rootElement,
            targetEvent: event,
            clickOutsideToClose: true,
            escapeToClose: true
        }).catch(() => {
            //Do nothing on dialog cancel
        }).finally(() => {
            if (dialogScope) {
                dialogScope.$destroy();
            }
        });
    }
}

ForecastCardController.$inject = ['$scope', '$rootElement', '$mdDialog'];
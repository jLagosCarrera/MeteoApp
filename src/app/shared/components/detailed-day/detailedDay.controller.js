export default class DetailedDayController {
    constructor($mdDialog, $scope, $rootScope) {
        this.$mdDialog = $mdDialog;
        this.$scope = $scope;

        this.locationChange = $rootScope.$on('$locationChangeStart', ($event) => {
            if (angular.element(document).find('md-dialog').length > 0) {
                $event.preventDefault();
                this.$mdDialog.cancel();
            }
        });
    }

    $onInit() {
        this.day = this.$scope.$parent.day;
    }

    $onDestroy() {
        this.locationChange();
    }

    getRotation(deg) {
        return `rotate(${deg}deg)`;
    }

    cancel() {
        this.$mdDialog.cancel();
    }
}

DetailedDayController.$inject = ['$mdDialog', '$scope', '$rootScope'];
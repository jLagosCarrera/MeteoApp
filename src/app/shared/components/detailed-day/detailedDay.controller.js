export default class DetailedDayController {
    constructor($mdDialog, $scope, $rootScope) {
        this.$mdDialog = $mdDialog;
        this.$scope = $scope;
        this.$rootScope = $rootScope;

        this.$rootScope.$on('$locationChangeStart', ($event) => {
            if (angular.element(document).find('md-dialog').length > 0) {
                $event.preventDefault();
                this.$mdDialog.cancel();
            }
        });
    }

    getRotation(deg) {
        return `rotate(${deg}deg)`;
    }

    $onInit() {
        this.day = this.$scope.$parent.day;
    }

    cancel() {
        this.$mdDialog.cancel();
    }
}

DetailedDayController.$inject = ['$mdDialog', '$scope', '$rootScope'];
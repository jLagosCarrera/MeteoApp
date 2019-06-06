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

    $onInit() {
        this.day = this.$scope.$parent.day;
        console.log(this.day);
    }

    cancel() {
        this.$mdDialog.cancel();
    }
}

DetailedDayController.$inject = ['$mdDialog', '$scope', '$rootScope'];
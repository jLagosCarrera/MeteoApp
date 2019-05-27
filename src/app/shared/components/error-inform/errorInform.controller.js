export default class ErrorPageController {
    constructor($stateParams, routingFunctionsService) {
        this.$stateParams = $stateParams;
        this.routingFunctionsService = routingFunctionsService;
    }

    $onInit() {
        this.errorInfo = this.$stateParams.errorInfo;
        this.citySearched = this.$stateParams.citySearched;
    }

    goHome() {
        this.routingFunctionsService.goHome();
    }

    reload() {
        this.routingFunctionsService.search(this.citySearched);
    }
}

ErrorPageController.$inject = ['$stateParams', 'routingFunctionsService'];
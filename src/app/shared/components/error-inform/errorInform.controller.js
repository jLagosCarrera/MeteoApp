export default class ErrorPageController {
    constructor($state, $stateParams, routingFunctionsService) {
        this.$state = $state;
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

ErrorPageController.$inject = ['$state', '$stateParams', 'routingFunctionsService'];
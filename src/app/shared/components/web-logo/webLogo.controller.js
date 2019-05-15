export default class WebLogoController {
    constructor(routingFunctionsService) {
        this.routingFunctionsService = routingFunctionsService;
    }

    goHome() {
        this.routingFunctionsService.goHome();
    }
}

WebLogoController.$inject = ['routingFunctionsService'];
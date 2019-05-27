export default class ContactFormController {
    constructor($mdDialog) {
        this.$mdDialog = $mdDialog;
    }

    success() {
        this.$mdDialog.hide();
    };

    cancel() {
        this.$mdDialog.cancel();
    };
}

ContactFormController.$inject = ['$mdDialog'];
export default class ContactFormController {
    constructor($mdDialog) {
        this.$mdDialog = $mdDialog;
    }

    success() {
        this.$mdDialog.hide();
    };

    cancel() {
        this.$mdDialog.cancel();
        console.log(this);
    };
}

ContactFormController.$inject = ['$mdDialog'];
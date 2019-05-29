export default class ContactFormController {
    constructor($mdDialog, $scope) {
        this.$mdDialog = $mdDialog;
        this.$scope = $scope;
    }

    success() {
        const name = this.$scope.name;
        const mail = this.$scope.mail;
        const subject = this.$scope.subject;
        const text = this.$scope.text;

        this.$mdDialog.hide({
            name,
            mail,
            subject,
            text
        });
    };

    cancel() {
        this.$mdDialog.cancel();
    };
}

ContactFormController.$inject = ['$mdDialog', '$scope'];
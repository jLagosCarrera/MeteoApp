import * as emailjs from 'emailjs-com';

export default class MailingService {
    constructor($mdToast, $translate) {
        this.$mdToast = $mdToast;
        this.$translate = $translate;
        emailjs.init(process.env.EMAILJS_API_KEY);
    }

    contact(answer) {
        emailjs.send(process.env.EMAILJS_SERVICE, process.env.EMAILJS_TEMPLATE, answer)
            .then((response) => {
                this.$mdToast.show(
                    this.$mdToast.simple()
                    .textContent(this.$translate.instant('TOAST.CONTACT.SUCCESS'))
                    .position('bottom right')
                    .theme('success-toast')
                    .hideDelay(3000)
                );
            }).catch((error) => {
                this.$mdToast.show(
                    this.$mdToast.simple()
                    .textContent(this.$translate.instant('TOAST.CONTACT.ERROR'))
                    .position('bottom right')
                    .theme('error-toast')
                    .hideDelay(3000)
                );
            });
    }
}

MailingService.$inject = ['$mdToast', '$translate'];
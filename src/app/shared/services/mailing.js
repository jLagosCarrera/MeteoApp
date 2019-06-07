import * as emailjs from 'emailjs-com';

export default class Mailing {
    constructor($mdToast, $translate) {
        this.$mdToast = $mdToast;
        this.$translate = $translate;
        emailjs.init(process.env.EMAILJS_API_KEY);
    }

    contact(answer) {
        emailjs.send(process.env.EMAILJS_SERVICE, process.env.EMAILJS_TEMPLATE, answer)
            .then((response) => {
                this.showToast('success-toast', 'TOAST.CONTACT.SUCCESS');
            }).catch((error) => {
                this.showToast('error-toast', 'TOAST.CONTACT.ERROR');
            });
    }

    showToast(theme, translate) {
        this.$mdToast.show(
            this.$mdToast.simple()
            .textContent(this.$translate.instant(translate))
            .position('bottom right')
            .theme(theme)
            .hideDelay(3000)
        );
        this.$mdToast.show(
            this.$mdToast.simple()
            .textContent(this.$translate.instant(translate))
            .position('bottom right')
            .theme(theme)
            .hideDelay(3000)
        );
    }
}

Mailing.$inject = ['$mdToast', '$translate'];
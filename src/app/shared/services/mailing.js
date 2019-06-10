import * as emailjs from 'emailjs-com';

/**
 * EmailJS API service functions.
 *
 * @class Mailing
 */
export default class Mailing {
    /**
     * Creates an instance of Mailing and injects needed dependencies.
     * 
     * @param {*} $mdToast - Toast service from AngularJS Material
     * @param {*} $translate - Translate service from angular-translate
     * @memberof Mailing
     */
    constructor($mdToast, $translate) {
        this.$mdToast = $mdToast;
        this.$translate = $translate;
        emailjs.init(process.env.EMAILJS_API_KEY);
    }

    /**
     * Sends mail with object data through emailJS API.
     *
     * @param {Object} answer - Data being sended through email
     * @memberof Mailing
     */
    contact(answer) {
        emailjs.send(process.env.EMAILJS_SERVICE, process.env.EMAILJS_TEMPLATE, answer)
            .then((response) => {
                this.showToast('success-toast', 'TOAST.CONTACT.SUCCESS');
            }).catch((error) => {
                this.showToast('error-toast', 'TOAST.CONTACT.ERROR');
            });
    }

    /**
     * Shows an AngularJS Material toast.
     *
     * @param {string} theme - Theme used for the toast
     * @param {string} translate - Translation message displayed on the toast
     * @memberof Mailing
     */
    showToast(theme, translate) {
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
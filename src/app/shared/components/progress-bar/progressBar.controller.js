export default class ProgressBarController {
    constructor() {

    }

    getPercentage() {
        return this.progress + "%";
    }
}

ProgressBarController.$inject = [];
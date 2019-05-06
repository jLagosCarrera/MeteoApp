export default class HomePageController {
    constructor() {
        this.search = () => {
            if (this.city == undefined || this.city == null || this.city.trim() === '') {
                return;
            }
        };
    }
};
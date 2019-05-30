export default class HomePageController {
    constructor($ngRedux) {
        this.$ngRedux = $ngRedux;
        this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis)(this);
    }

    mapStateToThis(state) {
        return {
            latestSearches: state.cities
        };
    }

    $onDestroy() {
        this.unsubscribe();
    }
}

HomePageController.$inject = ['$ngRedux'];
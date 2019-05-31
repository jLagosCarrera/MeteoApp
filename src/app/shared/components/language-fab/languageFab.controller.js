import {
    setLanguage
} from '../../../redux/actions';

export default class LanguageFabController {
    constructor($translate, $ngRedux, $state) {
        this.$translate = $translate;
        this.$ngRedux = $ngRedux;
        this.$state = $state;
        this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis)(this);
    }

    $onDestroy() {
        this.unsubscribe();
    }

    useLanguage(langKey) {
        this.$translate.use(langKey);
        this.$ngRedux.dispatch(setLanguage(langKey));
        if (this.$state.current.name === 'searchCity') {
            this.$state.reload();
        }
    }

    mapStateToThis(state) {
        return {
            latestSearches: state.main.language
        };
    }
}

LanguageFabController.$inject = ['$translate', '$ngRedux', '$state'];
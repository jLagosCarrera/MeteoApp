import {
    setLanguage
} from '../../../redux/actions';

export default class LanguageFabController {
    constructor($translate, $ngRedux, $state) {
        this.$translate = $translate;
        this.$ngRedux = $ngRedux;
        this.$state = $state;
        this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis)(this);
        this.languages = $translate.getAvailableLanguageKeys().map((key) => {
            return key === 'en' ? 'gb' : key;
        });
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

    getLanguageTranslation(langKey) {
        return `LANGUAGE_FAB.TOOLTIPS.LANGUAGES.${langKey.toUpperCase()}`;
    }

    mapStateToThis(state) {
        return {
            latestSearches: state.main.language
        };
    }
}

LanguageFabController.$inject = ['$translate', '$ngRedux', '$state'];
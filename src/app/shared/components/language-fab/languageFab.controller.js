import {
    setLanguage
} from '../../../redux/actions';

export default class LanguageFabController {
    constructor($translate, $ngRedux, $state) {
        this.$translate = $translate;
        this.$ngRedux = $ngRedux;
        this.$state = $state;
        this.languages = [...$translate.getAvailableLanguageKeys()].map((key) => {
            return key === 'en' ? 'gb' : key;
        });
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
}

LanguageFabController.$inject = ['$translate', '$ngRedux', '$state'];
import {
    setLanguage
} from '../../../redux/actions';

export default class LanguageFabController {
    constructor($translate, $ngRedux, $state) {
        this.$translate = $translate;
        this.$ngRedux = $ngRedux;
        this.$state = $state;
        this.languages = $translate.getAvailableLanguageKeys();
    }

    useLanguage(langKey) {
        this.$translate.use(langKey).then(() => {
            this.$ngRedux.dispatch(setLanguage(langKey));
            this.$state.reload();
        });
    }

    getLanguageTranslation(langKey) {
        return `LANGUAGE_FAB.TOOLTIPS.LANGUAGES.${langKey.toUpperCase()}`;
    }

    getFlagIcon(langKey) {
        if (langKey === 'en') {
            langKey = 'gb';
        }

        return `flag-icon flag-icon-${langKey}`
    }
}

LanguageFabController.$inject = ['$translate', '$ngRedux', '$state'];
import * as types from './constants';

export function addCity(city) {
    return {
        type: types.ADD_CITY,
        city
    };
}

export function setLanguage(languageKey) {
    return {
        type: types.SET_LANGUAGE,
        languageKey
    }
}
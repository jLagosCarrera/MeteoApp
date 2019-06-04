import * as types from './constants';

const initialState = {
    cities: JSON.parse(localStorage.getItem('latestSearches')) || [],
    preferedLanguage: localStorage.getItem('preferedLanguage')
}

export default function (state = initialState, action) {
    switch (action.type) {
        case types.ADD_CITY:
            addCity(state, action);
            break;
        case types.SET_LANGUAGE:
            setLanguage(state, action);
            break;
    }

    return state;
}

const addCity = (state, action) => {
    action.city = action.city.trim().toLowerCase();

    const index = state.cities.indexOf(action.city);
    if (index > -1) {
        state.cities.splice(index, 1);
    }

    state.cities.unshift(action.city);
    if (state.cities.length > 10) {
        state.cities.splice(10, state.cities.length - 10);
    }
    localStorage.setItem('latestSearches', JSON.stringify(state.cities));
}

const setLanguage = (state, action) => {
    state.preferedLanguage = action.languageKey;
    localStorage.setItem('preferedLanguage', state.preferedLanguage);
}
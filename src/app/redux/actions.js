import * as types from './constants';

export function addCity(city) {
    return {
        type: types.ADD_CITY,
        city: city
    };
}

export function getCities() {
    return {
        type: types.GET_CITIES,
    };
}
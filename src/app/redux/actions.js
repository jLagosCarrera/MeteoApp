import * as types from './constants';

export function addCity(city) {
    return {
        type: types.ADD_CITY,
        city: city
    };
}
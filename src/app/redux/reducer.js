import * as types from './constants';

export default function (state = [], action) {
    switch (action.type) {
        case types.ADD_CITY: {
            return [action.city, ...state];
        }

        case types.GET_CITIES: {
            return state;
        }

        default:
            return state;
    }
}
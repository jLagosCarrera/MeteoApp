import loggerMiddleware from 'redux-logger';
import reducers from './redux/reducer';
import {
    combineReducers
} from "redux";

export default ['$ngReduxProvider', ($ngReduxProvider) => {
    $ngReduxProvider.createStoreWith(combineReducers(reducers), [loggerMiddleware]);
}];
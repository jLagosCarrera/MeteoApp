import {
    combineReducers
} from "redux";
import reducer from './redux/reducer';

export default ['$ngReduxProvider', ($ngReduxProvider) => {
    $ngReduxProvider.createStoreWith(combineReducers({
        main: reducer,
    }), [], []);
}];
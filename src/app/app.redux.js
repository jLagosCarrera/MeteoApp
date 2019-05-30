import reducer from './redux/reducer';

export default ['$ngReduxProvider', ($ngReduxProvider) => {
    $ngReduxProvider.createStoreWith(reducer);
}];
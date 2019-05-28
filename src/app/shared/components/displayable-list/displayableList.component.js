import controller from './displayableList.controller';
import template from './displayableList.component.html';
import './displayableList.component.scss';

export default {
    controller,
    template,
    bindings: {
        listToDisplay: '<',
        displayIcon: '@',
        useHeader: '<',
        listType: '@'
    }
};
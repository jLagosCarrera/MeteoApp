import controller from './detailedDay.controller';
import template from './detailedDay.component.html';
import './detailedDay.component.scss';

export default {
    controller,
    template,
    bindings: {
        day: '<'
    }
};
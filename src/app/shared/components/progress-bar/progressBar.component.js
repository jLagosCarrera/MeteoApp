import controller from './progressBar.controller';
import template from './progressBar.component.html';
import './progressBar.component.scss';

export default {
    controller,
    template,
    bindings: {
        iconToDisplay: '@',
        progress: '<',
        color: '@',
        barType: '@'
    }
};
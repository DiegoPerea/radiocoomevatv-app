import template from './radio.html';
import controller from './radio.controller';
import './radio.styl';


let radioComponent = {
  restrict: 'E',
  bindings: {
    playing: '='
  },
  template,
  controller,
  controllerAs: 'radioCtrl'
};

export default radioComponent;

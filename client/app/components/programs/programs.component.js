import template from './programs.html';
import controller from './programs.controller';
import './programs.styl';

let programsComponent = {
  restrict: 'E',
  template,
  controller,
  controllerAs: 'programsCtrl'
};

export default programsComponent;

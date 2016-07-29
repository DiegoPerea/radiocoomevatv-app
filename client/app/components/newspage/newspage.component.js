import template from './newspage.html';
import controller from './newspage.controller';
import './newspage.styl';

let newspageComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs:'newsCtrl'
};

export default newspageComponent;

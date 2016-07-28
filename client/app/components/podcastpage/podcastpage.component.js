import template from './podcastpage.html';
import controller from './podcastpage.controller';
import './podcastpage.styl';

let podcastpageComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'pcCtrl'
};

export default podcastpageComponent;

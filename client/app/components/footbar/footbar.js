import angular from 'angular';
import uiRouter from 'angular-ui-router';
import footbarComponent from './footbar.component';

let footbarModule = angular.module('footbar', [
  uiRouter
])

.component('footbar', footbarComponent)

.name;

export default footbarModule;

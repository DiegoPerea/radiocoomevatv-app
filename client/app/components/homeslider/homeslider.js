import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homesliderComponent from './homeslider.component';

let homesliderModule = angular.module('homeslider', [
  uiRouter
])

.component('homeslider', homesliderComponent)

.name;

export default homesliderModule;

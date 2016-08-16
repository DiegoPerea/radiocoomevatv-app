import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import '../../../bower_components/angular-slick/dist/slick.min';


let homeModule = angular.module('home', [
  uiRouter, 'slick'
])

.component('home', homeComponent)

.name;

export default homeModule;

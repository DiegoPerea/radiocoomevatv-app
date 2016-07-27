import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homenewsComponent from './homenews.component';

let homenewsModule = angular.module('homenews', [
  uiRouter
])

.component('homenews', homenewsComponent)

.name;

export default homenewsModule;

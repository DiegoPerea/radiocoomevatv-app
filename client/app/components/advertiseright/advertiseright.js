import angular from 'angular';
import uiRouter from 'angular-ui-router';
import advertiserightComponent from './advertiseright.component';

let advertiserightModule = angular.module('advertiseright', [
  uiRouter
])

.component('advertiseright', advertiserightComponent)

.name;

export default advertiserightModule;

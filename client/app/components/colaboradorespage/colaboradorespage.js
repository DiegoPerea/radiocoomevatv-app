import angular from 'angular';
import uiRouter from 'angular-ui-router';
import colaboradorespageComponent from './colaboradorespage.component';

let colaboradorespageModule = angular.module('colaboradorespage', [
  uiRouter
])

.component('colaboradorespage', colaboradorespageComponent)

.name;

export default colaboradorespageModule;

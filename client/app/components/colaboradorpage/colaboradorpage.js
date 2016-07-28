import angular from 'angular';
import uiRouter from 'angular-ui-router';
import colaboradorpageComponent from './colaboradorpage.component';

let colaboradorpageModule = angular.module('colaboradorpage', [
  uiRouter
])

.component('colaboradorpage', colaboradorpageComponent)

.name;

export default colaboradorpageModule;

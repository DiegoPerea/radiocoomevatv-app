import angular from 'angular';
import uiRouter from 'angular-ui-router';
import newspageComponent from './newspage.component';

let newspageModule = angular.module('newspage', [
  uiRouter
])

.component('newspage', newspageComponent)

.name;

export default newspageModule;

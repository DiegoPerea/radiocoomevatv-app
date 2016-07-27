import angular from 'angular';
import uiRouter from 'angular-ui-router';
import advertisebottomComponent from './advertisebottom.component';

let advertisebottomModule = angular.module('advertisebottom', [
  uiRouter
])

.component('advertisebottom', advertisebottomComponent)

.name;

export default advertisebottomModule;

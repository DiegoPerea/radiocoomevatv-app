import angular from 'angular';
import uiRouter from 'angular-ui-router';
import podcastpageComponent from './podcastpage.component';

let podcastpageModule = angular.module('podcastpage', [
  uiRouter
])

.component('podcastpage', podcastpageComponent)

.name;

export default podcastpageModule;

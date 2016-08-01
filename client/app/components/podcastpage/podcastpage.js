import angular from 'angular';
import uiRouter from 'angular-ui-router';
import podcastpageComponent from './podcastpage.component';
import ngSanitize from 'angular-sanitize';
import '../../../../node_modules/ui-select/dist/select.min';

let podcastpageModule = angular.module('podcastpage', [
  uiRouter,ngSanitize,'ui.select'
])

.component('podcastpage', podcastpageComponent)

.name;

export default podcastpageModule;

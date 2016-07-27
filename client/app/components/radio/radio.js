import angular from 'angular';
import uiRouter from 'angular-ui-router';
import radioComponent from './radio.component';
import '../../../../node_modules/angular-audio/app/angular.audio';


let radioModule = angular.module('radio', [
  uiRouter, 'ngAudio'
])

.component('radio', radioComponent)

.name;

export default radioModule;

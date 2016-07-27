import angular from 'angular';
import uiRouter from 'angular-ui-router';
import programsComponent from './programs.component';
import ngSanitize from 'angular-sanitize';
import '../../../../node_modules/videogular/videogular.min';
import '../../../../node_modules/videogular-controls/vg-controls.min';
import '../../../../node_modules/videogular-overlay-play/vg-overlay-play.min';
import '../../../../node_modules/videogular-poster/vg-poster.min';

let programsModule = angular.module('programs', [
  uiRouter,
  ngSanitize,
  "com.2fdevs.videogular",
  "com.2fdevs.videogular.plugins.controls",
  "com.2fdevs.videogular.plugins.overlayplay",
  "com.2fdevs.videogular.plugins.poster"
])

.component('programs', programsComponent)

.name;

export default programsModule;

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homepodcastComponent from './homepodcast.component';

let homepodcastModule = angular.module('homepodcast', [
  uiRouter
])

.component('homepodcast', homepodcastComponent)

.name;

export default homepodcastModule;

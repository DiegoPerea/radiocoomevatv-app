import angular from 'angular';
import Navbar from './navbar/navbar'
import Home from './home/home';
import Footbar from './footbar/footbar';
import Radio from './radio/radio';
import AdvertiseRight from './advertiseright/advertiseright';
import AdvertiseBottom from './advertisebottom/advertisebottom';

import Programs from './programs/programs';

import PodcastPage from './podcastpage/podcastpage';

import Colaboradores from './colaboradorespage/colaboradorespage';
import Colaborador from './colaboradorpage/colaboradorpage';

import News from './newspage/newspage';

let componentModule = angular.module('app.components', [
  Navbar,
  Footbar,

  Home,
  Radio,

  AdvertiseRight,
  AdvertiseBottom,

  Programs,

  PodcastPage,

  Colaboradores,
  Colaborador,

  News

])

.name;

export default componentModule;

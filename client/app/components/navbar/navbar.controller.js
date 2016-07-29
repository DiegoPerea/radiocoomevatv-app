class NavbarController {
  constructor($state,$interval) {
    'ngInject';
    var self = this;
    self.name = 'navbar';

    self.headerClass='header-default';

    self.actualSelector='a#nav-home';

    self.hoverMenu = function($event){
      self.barSetItemPosition = $event.target.getBoundingClientRect().left;
      self.barSetWidth = $event.target.clientWidth;
    };

    self.changeState=function($event){

    };

    self.setPosition = function(){

      self.barSetItemPosition=angular.element(document.querySelector(self.actualSelector))[0].getBoundingClientRect().left;
      self.barSetWidth=angular.element(document.querySelector(self.actualSelector))[0].clientWidth;
    };



    self.setPosition();




  }
}

export default NavbarController;

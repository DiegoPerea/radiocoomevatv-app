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

    self.checkHeader=function(){
      console.log($state.$current.name);
      if($state.$current.name==='colaborador'){
        self.headerClass='header-colaborador';
      }else{
        self.headerClass='header-default';
      }
    };
    $interval(self.checkHeader, 150);

    self.checkHeader();
    self.setPosition();




  }
}

export default NavbarController;

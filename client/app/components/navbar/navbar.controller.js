class NavbarController {
  constructor() {
    this.name = 'navbar';

    this.headerClass='header-default';



    this.actualSelector='a#nav-home';

    this.hoverMenu = function($event){
      this.barSetItemPosition = $event.target.getBoundingClientRect().left;
      this.barSetWidth = $event.target.clientWidth;
    };

    this.setPosition = function(){
      this.barSetItemPosition=angular.element(document.querySelector(this.actualSelector))[0].getBoundingClientRect().left;
      this.barSetWidth=angular.element(document.querySelector(this.actualSelector))[0].clientWidth;
    };

    this.setPosition();




  }
}

export default NavbarController;

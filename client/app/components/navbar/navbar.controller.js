class NavbarController {
  constructor($stateParams,$interval) {
    'ngInject';
    var self = this;
    self.name = 'navbar';

    self.headerClass='triangle-left-default';

    self.headerLogo='1.png';

    self.headerLogoWidth='max-width:200px';

    self.actualSelector='a#nav-home';

    self.hoverMenu = function($event){
      console.log($event.target.getBoundingClientRect().left);
      self.barSetItemPosition = $event.target.getBoundingClientRect().left;
      self.barSetWidth = $event.target.clientWidth;
    };

    self.changeState=function($event){

    };

    self.setPosition = function(){
      console.log(angular.element(document.querySelector(self.actualSelector))[0].getBoundingClientRect().left);
      self.barSetItemPosition=angular.element(document.querySelector(self.actualSelector))[0].getBoundingClientRect().left-8.5;
      self.barSetWidth=angular.element(document.querySelector(self.actualSelector))[0].clientWidth;
    };


    self.principalNavShow=true;
    self.checkHeader=function(){


      if($stateParams.colabId==='medicina_prepagada'){
        self.headerClass='triangle-medicina';
        self.headerLogo='2.png';
        self.headerLogoWidth='max-width:324px';
        self.actualSelector='a#colab-home';
        self.principalNavShow=false;
      }else if($stateParams.colabId==='grupo_coomeva'){
        self.headerClass='triangle-grupo';
        self.headerLogo='1.png';
        self.headerLogoWidth='max-width:200px';
        self.actualSelector='a#colab-home';
        self.principalNavShow=false;
      }else if($stateParams.colabId==='corredores_seguros'){
        self.headerClass='triangle-corredores';
        self.headerLogo='3.png';
        self.headerLogoWidth='max-width:324px';
        self.actualSelector='a#colab-home';
        self.principalNavShow=false;
      }else if($stateParams.colabId==='eps'){
        self.headerClass='triangle-eps';
        self.headerLogo='4.png';
        self.headerLogoWidth='max-width:200px';
        self.actualSelector='a#colab-home';
        self.principalNavShow=false;
      }else if($stateParams.colabId==='bancoomeva'){
        self.headerClass='triangle-banco';
        self.headerLogo='5.png';
        self.headerLogoWidth='max-width:200px';
        self.actualSelector='a#colab-home';
        self.principalNavShow=false;
      }else if($stateParams.colabId==='recreacion'){
        self.headerClass='triangle-recreacion';
        self.headerLogo='6.png';
        self.headerLogoWidth='max-width:324px';
        self.actualSelector='a#colab-home';
        self.principalNavShow=false;
      }

      else{
        self.headerClass='triangle-left-default';
        self.principalNavShow=true;
      }
    };
    $interval(self.checkHeader, 150);

    self.checkHeader();
    self.setPosition();






  }
}

export default NavbarController;

class HomeController {
  constructor($http) {
    'ngInject';
    var self=this;
    self.name = 'home';

    self.notice = {};
    self.getNotices = function(){
      $http.get('http://radio.coomeva.com.co/live/api/noticias.php?getAll')
        .then(function(response){
          self.listNotices = response.data;
        });
    };

    self.getNotices();

  }
}

export default HomeController;

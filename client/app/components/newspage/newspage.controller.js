class NewspageController {
  constructor($http,$stateParams) {
    'ngInject';
    var self=this;
    self.name = 'newspage';

    self.notice=null;
    console.log($stateParams.noticeId);

    self.getNotice = function(){
      $http.get('http://radio.coomeva.com.co/live/api/noticias.php?getOne='+$stateParams.noticeId)
        .then(function(response){
          console.log(response.data);
          self.notice = response.data[0];
        });
    };

  }
}

export default NewspageController;

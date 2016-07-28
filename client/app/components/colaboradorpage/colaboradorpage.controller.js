class ColaboradorpageController {
  constructor($stateParams,$http) {
    'ngInject';
    var self = this;
    this.name = 'colaboradorpage';

    console.log($stateParams.colabId);

    self.currentVideo = null;
    self.currentProgramCategory = 'especiales_coomeva_salud';
    self.selectedVideo = {
      name: null,
      video: null
    }

    self.getVideosByCategory = function(category){
      console.log(category);
      $http.get('http://108.163.147.73/radio-new/public/api/v1.0/programas/programa/'+ category)
        .then(function(response){
          self.listVideos = response.data;
          console.log(response.data);
        });
    };

    self.getVideo = function(id){
      $http.get('http://108.163.147.73/radio-new/public/api/v1.0/programas/programa/' + id)
        .then(function(response){
          console.log(response.data);
        });
    };

    self.initCompany = function(){
      self.currentCompany = $stateParams.companyName;
      self.getVideosByCategory(self.currentProgramCategory);
    };

    self.videoList = [
      {name: 'Informe de gestión 2015', image: 'imagen.jpg', video: 'video.mp4'},
      {name: 'Informe de gestión 2015', image: 'imagen.jpg', video: 'video.mp4'},
      {name: 'Informe de gestión 2015', image: 'imagen.jpg', video: 'video.mp4'},
      {name: 'Informe de gestión 2015', image: 'imagen.jpg', video: 'video.mp4'},
    ];

    self.listNotices = null;
    self.getNotices = function(){
      $http.get('http://radio.coomeva.com.co/live/api/noticias.php?getAll')
        .then(function(response){
          self.listNotices = response.data;
        });
    };
    self.notice = {};
    self.getNotice = function(){
      $http.get('http://radio.coomeva.com.co/live/api/noticias.php?getOne='+$stateParams.noticeId)
        .then(function(response){
          self.notice = response.data[0];
          console.log(response.data[0].nombre);
        });
    };

    self.getNotices();
    self.initCompany();
  }
}

export default ColaboradorpageController;

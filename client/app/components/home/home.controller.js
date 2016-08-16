class HomeController {
  constructor($http,$interval) {
    'ngInject';
    var self=this;

    self.name = 'home';
    self.playing=true;
    self.notice = {};
    self.getNotices = function(){
      $http.get('http://radio.coomeva.com.co/live/api/noticias.php?getAll')
        .then(function(response){
          self.listNotices = response.data;
        });
    };

    self.getNotices();
    self.podcastMeasureConfig="width='100%' height='181'";
    self.playerButtonClass0= 'glyphicon glyphicon-play';
    self.playerButtonClass1= 'glyphicon glyphicon-play';
    self.soundPodcast0='stop';
    self.soundPodcast1='stop';
    self.playPausePodcast = function(index,track){
      self.playing=false;

      if(index===0){
        if(self.soundPodcast0 == 'stop'){
          self.soundPodcast0 = 'play';
          self.currentTrack = track;
          self.elementHTML = '<embed '+
            self.podcastMeasureConfig+
            'src="assets/player/podcasts.swf"'+
            'flashvars="podcast=assets/player/'+track+'&playingPodcast=playing"'+
            'type="application/x-shockwave-flash">';
          angular.element(document.querySelector('#podcastHome'+index )).html(self.elementHTML);
          // $('#podcastHome0').html(self.elementHTML);
        }else{
          self.soundPodcast0 = 'stop';
          angular.element(document.querySelector('#podcastHome'+index )).empty();

          //$('#podcast-equalizer').empty();
        }
        self.soundPodcast1 = 'stop';
        angular.element(document.querySelector('#podcastHome1' )).empty();
      }

      if(index===1){
        if(self.soundPodcast1 == 'stop'){
          self.soundPodcast1 = 'play';
          self.currentTrack = track;
          self.elementHTML = '<embed '+
            self.podcastMeasureConfig+
            'src="assets/player/podcasts.swf"'+
            'flashvars="podcast=assets/player/'+track+'&playingPodcast=playing"'+
            'type="application/x-shockwave-flash">';
          angular.element(document.querySelector('#podcastHome'+index )).html(self.elementHTML);
          // $('#podcastHome0').html(self.elementHTML);
        }else{
          self.soundPodcast1 = 'stop';
          angular.element(document.querySelector('#podcastHome'+index )).empty();

          //$('#podcast-equalizer').empty();
        }
        self.soundPodcast0 = 'stop';
        angular.element(document.querySelector('#podcastHome0' )).empty();
      }


    };

    self.stopAllPodcasts=function(){
      self.soundPodcast0 = 'stop';
      angular.element(document.querySelector('#podcastHome0' )).empty();
      self.soundPodcast1 = 'stop';
      angular.element(document.querySelector('#podcastHome1' )).empty();
    };



    self.playingCheck=function(){

      if(self.playing===true){
        self.stopAllPodcasts();
      }
    };

    $interval(self.playingCheck, 10);




  }
}

export default HomeController;

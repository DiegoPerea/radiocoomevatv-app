class PodcastpageController {
  constructor($http,$stateParams) {
    'ngInject';
    var self = this;
    self.name = 'podcastpage';



    self.selected = null;

    self.podcastGrid = 'podcast-grid col-md-5 row podcast-grid-close';
    self.podcastPlayer = 'podcast-player col-md-7 podcast-player-open';
    self.podcastGridItem = 'podcast-item in';
    self.currentPodcastsList = {};
    self.currentCategory = null;
    self.currentPodcast = {
      titulo: null,
      descripcion: null,
      imagen: null,
      audio: null
    };
    self.currentPodcastsListCarousel = [];
    self.podcastGridPromise = null;
    self.frequiencyInterval = null;
    self.podcastMeasureConfig='width="250" height="270"';
    /*
     * Servicio de la lista de Podcasts:
     * getListCategory: Trae las categorías del api
     * getPodcastByCategory: Podcast según categoría @parms: listParams
     *
     * getPodcast: Carga y muestra la primera canción
     * DEMAS FUNCIONES PENDIENTES DE REVISION Y DOCUMENTACION
     * */
    self.podcastsList = {
      getListCategory: function(){
        $http.get('http://108.163.147.73/radio-new/public/api/v1.0/podcasts/lista-categorias')
          .then(function(response){
            self.listCategories = response.data;
            self.selected = { value: self.listCategories[0] };

            self.gridItemsAnimation.out();
            self.podcastsList.getPodcastByCategory({categoryName: event.target.value, start: 0, end: 30, arguments: true});
          });
      },
      getPodcastByCategory: function(listParams=undefined){

        if(listParams == undefined ){
          listParams = {categoryName: 'a mi colombia', start: 0, end: 30, arguments: false};
        }
        if($stateParams.categoryName){
          listParams.categoryName= $stateParams.categoryName;
          listParams.start= $stateParams.start;
          listParams.end= $stateParams.end;
        }
        self.podcastGridPromise = $http.get('http://radio.coomeva.com.co/live/api/podcast.php?bySubCategory='+listParams.categoryName+'&start='+listParams.start+'&end='+listParams.end)
          .then(function(response){
            self.currentPodcastsList = response.data;
            self.gridItemsAnimation.in();
            if(listParams.arguments == false){
              self.currentPodcast.imagen = response.data[0].imagen;
              self.currentPodcast.titulo = response.data[0].titulo;
              self.podcastsList.getPodcast(response.data[0]);
            }
          });
      },
      getPodcastCarousel: function(listParams){
        if(listParams == undefined ){
          listParams = {categoryName: 'a mi colombia', start: 0, end: 3};
        }
        if($stateParams.categoryName){
          listParams.categoryName= $stateParams.categoryName;
          listParams.start= $stateParams.start;
          listParams.end= $stateParams.end;
        }
        self.currentCategory = listParams.categoryName;
        self.currentPodcastsListCarousel = $http.get('http://radio.coomeva.com.co/live/api/podcast.php?bySubCategory='+listParams.categoryName+'&start='+listParams.start+'&end='+listParams.end)
          .then(function(response){
            return response.data;
          });
      },
      getPodcast: function(item){
        self.getSelectedTrack='track.mp3';
        self.elementHTML = '<embed '+
          self.podcastMeasureConfig+
          'src="./assets/player/podcasts.swf"'+
          'flashvars="podcast=./assets/player/'+self.getSelectedTrack+'&playingPodcast=playing"'+
          'type="application/x-shockwave-flash">';
          angular.element(document.querySelector('#podcast-equalizer')).html(self.elementHTML);
        //$('#podcast-equalizer').html(self.elementHTML);

        self.podcastGrid = 'podcast-grid col-md-5 row podcast-grid-close row';
        self.podcastPlayer = 'podcast-player col-md-7 podcast-player-open row';
        self.podcastGridItem = 'podcast-item in';
        self.soundPodcast = 'play';
        self.currentPodcast.titulo = item.titulo;
        self.currentPodcast.descripcion = item.descripcion;
        self.currentPodcast.imagen = item.imagen;
        self.currentPodcast.subcategoria = item.subcategoria;
      },
      setPodcast: function(item){
        console.log(item);
        var params={categoryName: item.name, start: 0, end: 30, arguments: false};
        self.podcastsList.getPodcastByCategory(params)
      }
    };

    /*
     * Verificar track current
     * */
    self.getSelectedTrack="track.mp3";
    self.soundPodcast="play";
    /*
     * Botón de play/pausa
     * */
    self.playPausePodcast = function(){
      self.playerButtonClass= 'glyphicon glyphicon-play';
      if(self.soundPodcast == 'stop'){
        self.soundPodcast = 'play';
        self.currentTrack = 'getSelectedTrack';
        self.elementHTML = '<embed '+
          self.podcastMeasureConfig+
          'src="./assets/player/podcasts.swf"'+
          'flashvars="podcast=./assets/player/'+self.getSelectedTrack+'&playingPodcast=playing"'+
          'type="application/x-shockwave-flash">';
        angular.element(document.querySelector('#podcast-equalizer')).html(self.elementHTML);
       // $('#podcast-equalizer').html(self.elementHTML);
      }else{
        self.soundPodcast = 'stop';
        angular.element(document.querySelector('#podcast-equalizer')).empty();

        //$('#podcast-equalizer').empty();
      }
    };
    /*
     * Animación de los elementos al entrar.
     * */
    self.gridItemsAnimation = {
      in: function(){
        console.log('LOGADA');
        angular.forEach(angular.element(document.querySelector('.podcast-item')), function(value, key){
          var item = angular.element(document.querySelector(value));
          item.removeClass('out');
          item.addClass('in');
        });
      },
      out: function(){
        angular.forEach(angular.element(document.querySelector('.podcast-item')), function(value, key){
          var item = angular.element(document.querySelector(value));
          item.removeClass('in');
          item.addClass('out');
        });
      }
    };
    /*
     * Inicio del controlador. Autorun. Se inicia automaticamente
     * */
    self.init = function(){
      self.podcastsList.getListCategory();
      self.podcastsList.getPodcastByCategory();
    }();
  }
}

export default PodcastpageController;

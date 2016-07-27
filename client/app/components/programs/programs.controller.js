class ProgramsController {
  constructor($sce,$http,$scope) {
    'ngInject';

    var self = this;

    self.name = 'programs';

    self.videoHandle = {
      sources:[],
      theme: "/assets/css/videogular-themes-default/videogular.min.css",
      title: null,
      subtitle: null,
      description: null,
      type: null,
      idPlaying:null
    };



    self.allPrograms = {};

    self.chapters = [];

    self.getVideoType = function(txt){
      splittedText=txt.split(".");
      console.log(splittedText);
      type="video/"+splittedText[self.length-1];
    };

    self.programsList = {
      getListCategory: function(){
        $http.get('http://108.163.147.73/radio-new/public/api/v1.0/programas/lista-programas')
          .then(function(response){
            self.allPrograms = response.data;
            self.programsList.getChapters(self.allPrograms[0].URL);
          });
      },
      getChapters: function(programCategory){
        $http.get('http://108.163.147.73/radio-new/public/api/v1.0/programas/programa/'+ programCategory)
          .then(function(response){
            self.chapters = response.data;
            self.programsList.getprogram(response.data[0].id);

          });
      },
      getprogram: function(id){
        $http.get('http://108.163.147.73/radio-new/public/api/v1.0/programas/programa/' + id)
          .then(function(response){
            var type=self.getVideoType(response.data[0].media);
            var addsource=[
              {
                sources: [
                  {src: $sce.trustAsResourceUrl(response.data[0].media), type: "video/mp4"}
                ]
              }];
            console.log(type);
            self.videoHandle.sources=addsource[0].sources;
            self.videoHandle.title=response.data[0].name;
          });
      },
    };

    self.selectProgram = function(item){
      self.programsList.getChapters(item.URL);

    };

    self.init = function(){
      self.programsList.getListCategory();





    };

    self.init();



    return self;
  }

}

export default ProgramsController;

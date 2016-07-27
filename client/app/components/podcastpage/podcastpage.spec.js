import PodcastpageModule from './podcastpage'
import PodcastpageController from './podcastpage.controller';
import PodcastpageComponent from './podcastpage.component';
import PodcastpageTemplate from './podcastpage.html';

describe('Podcastpage', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PodcastpageModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PodcastpageController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(PodcastpageTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PodcastpageComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PodcastpageTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PodcastpageController);
      });
  });
});

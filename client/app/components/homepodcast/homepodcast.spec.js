import HomepodcastModule from './homepodcast'
import HomepodcastController from './homepodcast.controller';
import HomepodcastComponent from './homepodcast.component';
import HomepodcastTemplate from './homepodcast.html';

describe('Homepodcast', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HomepodcastModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HomepodcastController();
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
      expect(HomepodcastTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = HomepodcastComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(HomepodcastTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(HomepodcastController);
      });
  });
});

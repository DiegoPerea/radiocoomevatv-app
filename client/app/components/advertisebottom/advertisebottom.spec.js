import AdvertisebottomModule from './advertisebottom'
import AdvertisebottomController from './advertisebottom.controller';
import AdvertisebottomComponent from './advertisebottom.component';
import AdvertisebottomTemplate from './advertisebottom.html';

describe('Advertisebottom', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AdvertisebottomModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AdvertisebottomController();
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
      expect(AdvertisebottomTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = AdvertisebottomComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(AdvertisebottomTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AdvertisebottomController);
      });
  });
});

import HomesliderModule from './homeslider'
import HomesliderController from './homeslider.controller';
import HomesliderComponent from './homeslider.component';
import HomesliderTemplate from './homeslider.html';

describe('Homeslider', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HomesliderModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HomesliderController();
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
      expect(HomesliderTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = HomesliderComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(HomesliderTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(HomesliderController);
      });
  });
});

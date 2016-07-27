import HomenewsModule from './homenews'
import HomenewsController from './homenews.controller';
import HomenewsComponent from './homenews.component';
import HomenewsTemplate from './homenews.html';

describe('Homenews', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HomenewsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HomenewsController();
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
      expect(HomenewsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = HomenewsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(HomenewsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(HomenewsController);
      });
  });
});

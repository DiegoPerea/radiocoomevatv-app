import RadioModule from './radio'
import RadioController from './radio.controller';
import RadioComponent from './radio.component';
import RadioTemplate from './radio.html';

describe('Radio', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RadioModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RadioController();
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
      expect(RadioTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RadioComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RadioTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RadioController);
      });
  });
});

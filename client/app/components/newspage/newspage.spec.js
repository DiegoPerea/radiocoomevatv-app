import NewspageModule from './newspage'
import NewspageController from './newspage.controller';
import NewspageComponent from './newspage.component';
import NewspageTemplate from './newspage.html';

describe('Newspage', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NewspageModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NewspageController();
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
      expect(NewspageTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = NewspageComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(NewspageTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(NewspageController);
      });
  });
});

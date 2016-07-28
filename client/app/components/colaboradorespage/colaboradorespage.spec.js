import ColaboradorespageModule from './colaboradorespage'
import ColaboradorespageController from './colaboradorespage.controller';
import ColaboradorespageComponent from './colaboradorespage.component';
import ColaboradorespageTemplate from './colaboradorespage.html';

describe('Colaboradorespage', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ColaboradorespageModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ColaboradorespageController();
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
      expect(ColaboradorespageTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ColaboradorespageComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ColaboradorespageTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ColaboradorespageController);
      });
  });
});

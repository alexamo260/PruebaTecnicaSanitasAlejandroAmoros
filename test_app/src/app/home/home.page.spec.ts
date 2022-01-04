import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, ToastController } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { HomePage } from './home.page';

class ToastControllerMock {
  create = jasmine.createSpy('toastController.create').and.returnValue(Promise.resolve({}));
}

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers:[{ provide: ToastController, useClass: ToastControllerMock},]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('cambiarIconoPassword1', () => {
    component.cambiarIconoPassword();
    expect(component).toBeTruthy();
  });

  it('cambiarIconoPassword2', () => {
    let iconoPassword = "iconoPasswordTest";
    component["iconoPassword"] = iconoPassword;
    component.cambiarIconoPassword();
    expect(component).toBeTruthy();
  });

  it('login1', () => {
    component.login();
    expect(component).toBeTruthy();
  });

  it('login2', () => {
    let email = "emailTest@";
    let password = "passwordTest";
    component["email"] = email;
    component["password"] = password;
    component.login();
    expect(component).toBeTruthy();
  });

  it('mostrarPopupLogin', () => {
    let mensaje = "mensajeTest";
    let icono = "iconoTest";
    component.mostrarPopupLogin(mensaje, icono);
    expect(component).toBeTruthy();
  });

});

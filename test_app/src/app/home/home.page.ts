import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  usuario: FormGroup;
  mostrarPassword = false;
  iconoPassword = 'eye';
  email:string;
  password:string;
  mensaje:string;
  iconoPopup:string;

  constructor(public navCtrl: NavController, public toastController: ToastController) { }

  ngOnInit() {
    this.usuario = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  cambiarIconoPassword(){
    this.mostrarPassword = !this.mostrarPassword;
    if(this.iconoPassword == 'eye'){
      this.iconoPassword = 'eye-off';
    }else{
      this.iconoPassword = 'eye';
    }
  }

  login(){
    console.log("Email introducido: " + this.usuario.controls.email.value);
    console.log("Password introducido: " + this.usuario.controls.password.value);
    this.mensaje = 'Login correcto';
    this.iconoPopup = 'checkmark-outline';
    this.mostrarPopupLogin(this.mensaje, this.iconoPopup); 
  }

  mostrarPopupLogin(mensaje, iconoPoup){
    this.toastController.create({
      message: mensaje,
      position: 'bottom',
      cssClass: 'toast-truce',
      buttons: [
        {
          side: 'end',
          icon: iconoPoup
        }, {
          side: 'end',
          text: 'CERRAR',
          role: 'cancel'
        }
      ]
    }).then(async (toast) => {
      return await toast.present();
    });
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
usuario : string="";

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
  private NavParams: NavParams) {

  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      subTitle: 'Sesión iniciada...',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertRecuperar() {
    let alert = this.alertCtrl.create({
      title: 'Recuperar Contraseña',
      subTitle: 'Escribe tu correo para recuperar tu contraseña.',
      inputs : [{
        placeholder: 'Correo electrónico'
        },
        {
          placeholder: 'Correo electrónico2'
        }
      ],
      buttons: [
        {
          text: 'Enviar correo',
          handler: data => {
            console.log(data);
            this.showAlertConfirmaRecuperar(data);
          }
        }
      ]
    });
    alert.present();
  }

  showAlertConfirmaRecuperar(data) {
    let alert = this.alertCtrl.create({
      title: 'Recuperar Contraseña',
      subTitle: 'Acabamos de enviarte un mensaje a tu correo: ' + data[0] + ', ' + data[1],
      buttons: [  {
        text: 'OK',
        handler: seg => {
          console.log(seg);
          this.showConfirmCorr(seg);
        }
      }]
    });
    alert.present();
  }
  showConfirmCorr(seg) {
    const confirm = this.alertCtrl.create({
      title: 'Este es su correo y contraseña?',
      message: 'Desea comfirmar su correo y contraseña?',
      buttons: [
        {
          text: 'Atras',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Continuar',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}



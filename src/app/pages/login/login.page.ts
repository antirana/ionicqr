import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AlertController, LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController
  ) { 
    this.formularioLogin = this.fb.group({
      'email': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }


  
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Dismissing after 3 seconds...',
      duration: 3000,
    });

    loading.present();
  }

  async ingresar(){
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.email == f.email && usuario.password == f.password){
      //console.log('funciona');
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('home');
      
        const loading = await this.loadingCtrl.create({
          duration: 2000,
        });
    
        loading.present();
      

    }else{
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Datos incorrectos',
        buttons: ['Aceptar'],
      });

      await alert.present();
      return;
    }
  }

}

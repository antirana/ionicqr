import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


import { AlertController,IonButton,NavController,LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['../login/login.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro!: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private authService: AuthService,
    private router: Router){}
  

  ngOnInit() {
    this.createForm();
  }
  get email(){
    return this.formularioRegistro?.get('email');
  }

  get password(){
    return this.formularioRegistro?.get('password');
  }
  createForm(){
    this.formularioRegistro = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  async register(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    const user = await this.authService.register(this.formularioRegistro.value.email,this.formularioRegistro.value.password);
    await loading.dismiss();

    if(user){
      this.router.navigateByUrl('/login');
    }
    else{
      this.alertPresent('Registro fallido','Revise bien los datos ingresado e inténtelo nuevamente...');
    }

    
  }
  async alertPresent(header:string,message:string){
    const alert = await this.alertCtrl.create({
      header:header,
      message:message,
      buttons: ['OK']
    });
    alert.present();
  }

}

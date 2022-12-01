import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController, LoadingController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  formularioLogin!: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private authService: AuthService,
    private router: Router)
    {}
  

  ngOnInit() {
    this.createForm();
  }

    get email(){
      return this.formularioLogin?.get('email');
    }
  
    get password(){
      return this.formularioLogin?.get('password');
    }
    createForm(){
      this.formularioLogin = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      })
    }
    async login(){
      const loading = await this.loadingCtrl.create();
      await loading.present();
      const user = await this.authService.login(this.formularioLogin.value.email,this.formularioLogin.value.password);
      await loading.dismiss();
  
      if(user){
        this.alertPresent('Bienvenido ', this.formularioLogin.value.email);
        this.router.navigateByUrl('/home');
      }
      else{
        this.alertPresent('Ingreso fallido','Revise bien los datos ingresado');
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
   

  


  
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Dismissing after 3 seconds...',
      duration: 3000,
    });

    loading.present();
  }
  

}

import { Component } from '@angular/core';
import { Auth, EmailAuthCredential, user, User } from '@angular/fire/auth';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/services/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AvatarService } from 'src/app/services/avatar.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Uid:string;
  user=false;
  private res;
  handlerMessage = '';
  roleMessage = '';
  usuario: Usuario = {
    uid: '',
    name: '',
    lastname: '',
    gender: '',
    age: null,
    email: '',
    celular: '',
    direccion: '',
    carrera: '',
    descripcion: '',
    privilegio: ''
  };


  constructor(private auth: Auth,private usuarioService:UsuarioService, private alertCtrl:AlertController,private router: Router,
    private modalCtrl:ModalController, private toastCtrl:ToastController
    ) {this.getUserProfile()
      this.getUsuario()}

  async getUserProfile(){
    const user = this.auth.currentUser;
    this.Uid = user.uid;
        
  }
  getUsuario(){
    
    this.usuarioService.getUsuarioById(this.Uid).subscribe(respuesta => {
      this.res = respuesta;
      if(!respuesta){
        
        this.presentAlert()
      }
      else{
        
      }

    });
  }
  
  
  async toasPresent(message:string){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:1000,
    });
    toast.present();
  }

  //pedir datos si no ha ingresado datos
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'NO HAZ INGRESADO TUS DATOS',
      buttons: [
        {
          text: 'INGRESAR',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
            this.router.navigateByUrl('/datos');

          },
        },
      ],
    });

    await alert.present();


  }


}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource  } from '@capacitor/camera';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AvatarService } from 'src/app/services/avatar.service';
import { Auth, EmailAuthCredential, user, User } from '@angular/fire/auth';
import { Usuario } from 'src/app/services/usuario';



@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage {
  profile:any=null;
  usuarioi: Usuario={
    name: '',
    lastname: '',
    gender: '',
    age: 0,
    email: '',
    celular: '',
    image: '',
    direccion: '',
    carrera: '',
    descripcion: ''
  };

  constructor(private authService:AuthService,
    private avatarService:AvatarService,
    private alertCtrl:AlertController,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private router:Router,
    private auth: Auth) {
      this.loadProfile()
      
     }

     async getUserProfile(){
      const user = this.auth.currentUser;
      return this.usuarioi;
      
      
    }
    




  loadProfile(){
    this.avatarService.getUserProfile().subscribe(respuesta => {
      this.profile = respuesta;
    });
  }

  async uploadAvatar(){
    const avatar = await Camera.getPhoto({
      quality:90,
      allowEditing:false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    });
    console.log(avatar);

    if(avatar){
      const loading = await this.loadingCtrl.create();
      await loading.present();
      const respuesta = await this.avatarService.uploadAvatar(avatar);
      console.log(respuesta);
      await loading.dismiss();

      if(!respuesta){
        this.alertPresent('Upload failed','There was a problem uploading your avatar.');
      }
      else{
        this.toastPresent('Avatar uploaded!!!');
      }
    }
  }

  async toastPresent(message:string){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:1000,
    });
    await toast.present();
  }

  async alertPresent(header:string, message:string){
    const alert = await this.alertCtrl.create({
      header:header,
      message:message,
      buttons:['OK'],
    });
    await alert.present();
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource  } from '@capacitor/camera';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AvatarService } from 'src/app/services/avatar.service';
import { Auth, EmailAuthCredential, user, User } from '@angular/fire/auth';
import { Usuario } from 'src/app/services/usuario';
import {FormControl,Validators} from '@angular/forms';
import { UsuarioService} from 'src/app/services/usuario.service';



@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {
  profile:any=null;
  Uid:string;
  private res;

  nombre = new FormControl('');
  genero = new FormControl('');

  usuario : Usuario ={
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
  }

  constructor(private authService:AuthService,
    private avatarService:AvatarService,
    private alertCtrl:AlertController,
    private toastCtrl:ToastController,
    private usuarioService:UsuarioService,
    private loadingCtrl:LoadingController,
    private router:Router,
    private auth: Auth) {
      this.loadProfile()
      this.getUserProfile();
      
     }
     ngOnInit() {
      this.getUsuario();
    }

     async getUserProfile(){
      const user = this.auth.currentUser;
      this.Uid= user.uid;
      
      return this.Uid;

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

   getUsuario(){
    
    this.usuarioService.getUsuarioById(this.Uid).subscribe(respuesta => {
      this.res = respuesta;
      console.log(this.res.usuario.privilegio);
      // const cadena = JSON.stringify (this.usuario);
      // // JSON.parse(cadena)
      


    });
    //  for ( let key in this.usuario) {
    //   console.log(key)
    //   console.log(key + ":" , this.usuario[key]);
    // }
  }
    
  }

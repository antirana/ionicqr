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
<<<<<<< Updated upstream
  usuarioi: Usuario={
=======
  Uid:string;
  private res;

  alumno = false;
  admin = false;


  nombre = new FormControl('');
  genero = new FormControl('');

  usuario : Usuario ={
    uid: '',
>>>>>>> Stashed changes
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
      
      
<<<<<<< Updated upstream
=======
      return this.Uid;
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
}
=======
   getUsuario(){
    
    this.usuarioService.getUsuarioById(this.Uid).subscribe(respuesta => {
      this.res = respuesta;
      let priv = this.res.usuario.privilegio;
      if(priv == "alumno"){
        this.alumno = true;

      }
      else if(priv == "admin"){
        this.admin= true;}
      
    });
  }
    
  }
>>>>>>> Stashed changes

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
    uid:'',
    id:'',
    name:'',
    lastname: '',
    gender: '',
    age: null,
    email: '',
    celular: '',
    image: '',
    direccion: '',
    carrera: '',
    descripcion: ''

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

<<<<<<< Updated upstream
  
  async addUsuario(){

    const alert = await this.alertCtrl.create({
      header:'Completar datos',
      inputs:[
        {
          name:"name",
          type:"text",
          placeholder:"Name"
        },
        {
          name:"lastname",
          type:"text",
          placeholder:"Lastname"
        },
        {
          name:"gender",
          type:"text",
          placeholder:"Gender"
        },
        {
          name:"age",
          type:"number",
          placeholder:"Age"
        },
        {
          name:"celular",
          type:"number",
          placeholder:"celular"
        },
        {
          name:"direccion",
          type:"text",
          placeholder:"direccion"
        },
        {
          name:"email",
          type:"email",
          placeholder:"correo@correo.com"
        },
        {
          name:"image",
          type:"url",
          placeholder:"Link image"
        },
        {
          name:"carrera",
          type:"text",
          placeholder:"carrera"
        },
        {
          name:"descripcion",
          type:"text",
          placeholder:"descripcion"
        },
      ],
      buttons: [
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text:'Save',
          role:'confirm',
          handler:(data) => { 
                              this.usuario.uid= this.Uid;
                              this.usuario.name= data.name;
                              this.usuario.lastname= data.lastname;
                              this.usuario.gender= data.gender;
                              this.usuario.age= data.age;
                              this.usuario.email= data.email;
                              this.usuario.celular= data.celular;
                              this.usuario.image= data.image;
                              this.usuario.direccion= data.direccion;
                              this.usuario.carrera= data.carrera;
                              this.usuario.descripcion= data.descripcion;

            this.usuarioService.addUsuario(data);
            this.toasPresent('Datos del usuario añadido');

          }
        }
      ]
=======
>>>>>>> Stashed changes
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


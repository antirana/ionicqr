import { Component } from '@angular/core';
import { Auth, EmailAuthCredential, user, User } from '@angular/fire/auth';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/services/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AvatarService } from 'src/app/services/avatar.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Uid:string;
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

  constructor(private auth: Auth,private usuarioService:UsuarioService, private alertCtrl:AlertController,
    private modalCtrl:ModalController, private toastCtrl:ToastController
    ) {this.getUserProfile()}

  async getUserProfile(){
    const user = this.auth.currentUser;
    this.Uid = user.uid;
    console.log(this.Uid);
    
    
  }

  
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
    });
    alert.present();
  }
  async toasPresent(message:string){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:1000,
    });
    toast.present();
  }
}

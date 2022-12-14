import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/services/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Auth, user, User } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
  miModelo: any;
  Uid: string;
  contactForm!: FormGroup;
  name: string;
  apellido: string;
  genero: string;
  edad: number;
  numero: number;
  correo: string;
  direccion: string;
  carrera: string;
  descripcion: string;
  option_selected: string = '';
  privilegio = "alumno";
  option_carre: string = '';
  boton = false;
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


  private todo: FormGroup;

  constructor(public navCtrl: NavController, private usuarioService: UsuarioService, private toastCtrl: ToastController, private router: Router,
    private formBuilder: FormBuilder, private auth: Auth,
    public alertCtrl: AlertController) {
    this.miModelo = {};

    //BUILDER
    this.todo = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      lastname: ['', [Validators.required, Validators.minLength(6)]],
      edad: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(3)]],
      cel: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(9), Validators.minLength(9)]],
      direccion: ['', [Validators.required, Validators.minLength(5)]],
      correo: ['', [Validators.required, Validators.email]],
      descripcion: ['', [Validators.required, Validators.minLength(6)]],
    });


  }

  ngOnInit() {

    this.getUserProfile()
  }
  async getUserProfile() {
    const user = this.auth.currentUser;
    this.Uid = user.uid;

  }




  async register() {

    this.usuario.uid = this.Uid;
    this.usuario.name = this.name;
    this.usuario.lastname = this.apellido;
    this.usuario.gender = this.genero;
    this.usuario.age = this.edad;
    this.usuario.email = this.correo;
    this.usuario.celular = ('' + this.numero)
    this.usuario.direccion = this.direccion;
    this.usuario.carrera = this.carrera;
    this.usuario.descripcion = this.descripcion;
    this.usuario.privilegio = "alumno";

    this.usuarioService.addUsuario(this.usuario);
    this.router.navigateByUrl('/home');
    this.toasPresent('Datos del usuario añadido');




  }

  async toasPresent(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 1000,
    });
    toast.present();
  }

  selecGender(ev: CustomEvent) {
    this.option_selected = ev.detail.value;
    this.genero = this.option_selected;

  }
  handleChange(e) {
    this.carrera = e.detail.value;
  }



}

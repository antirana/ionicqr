import { Component, OnInit} from '@angular/core';
import QRCode from 'qrcode';
import { DatePipe } from '@angular/common';
import { UsuarioService} from 'src/app/services/usuario.service';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-codigo',
  templateUrl: './codigo.page.html',
  styleUrls: ['./codigo.page.scss'],
})
export class CodigoPage implements OnInit{
  code = '';
  generated = '';
  alumno = false;
  admin = false;
  Uid:string;
  private res;
  fecha = '';
  currentDate = new Date().toString();;

  ngOnInit() {
    this.getUserProfile();
    this.getUsuario();
  }

  displayQrCode() {
    return this.generated !== '';
  }
  constructor(private usuarioService:UsuarioService,private auth: Auth) {
    let date = new Date()

  }
  

  async getUserProfile(){
    const user = this.auth.currentUser;
    this.Uid= user.uid;
    return this.Uid;
  }

  process() {
    const qrcode = QRCode;
    const self = this;
    const fecha = this.currentDate;
    qrcode.toDataURL(self.code,{ errorCorrectionLevel: 'H' }, function (err, url) {
      self.generated = url;
    })
  }

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
  }}

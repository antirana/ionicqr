<<<<<<< Updated upstream
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit} from '@angular/core';
import QRCode from 'qrcode';
import { DatePipe } from '@angular/common';
import { UsuarioService} from 'src/app/services/usuario.service';
import { Auth } from '@angular/fire/auth';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlertController } from '@ionic/angular';
import { Asistencia } from 'src/app/services/usuario';
>>>>>>> Stashed changes

@Component({
  selector: 'app-codigo',
  templateUrl: './codigo.page.html',
  styleUrls: ['./codigo.page.scss'],
})
export class CodigoPage implements OnInit {
<<<<<<< Updated upstream

  constructor() { }

  ngOnInit() {
  }

=======
  scanActive: boolean = false;
  asistencia: Asistencia ={
    fecha: '',
    mensaje: ''
  }
  code = '';
  generated = '';
  alumno = false;
  admin = false;
  Uid:string;
  private res;
  currentDate = new Date().toString();
  mensaje = '';


  displayQrCode() {
    return this.generated !== '';
  }
  constructor(
    public alertCtrl: AlertController, 
    private usuarioService:UsuarioService,
    private auth: Auth) {}

  ngOnInit() {
    this.getUserProfile();
    this.getUsuario();
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
  }
  //metodos desplegar scanear qr

  async checkPermission() {
    return new Promise(async (resolve, reject) => {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        resolve(true);
      } else if (status.denied) {
        BarcodeScanner.openAppSettings();
        resolve(false);
      }
    });
  }

  async startScanner() {
    const allowed = await this.checkPermission();

    if (allowed) {
      this.scanActive = true;
      BarcodeScanner.hideBackground();

      const result = await BarcodeScanner.startScan();
      this.mensaje = (result.content);
      if (result.hasContent) {
        this.scanActive = false;
        this.showPrompt();
        //alert(result.content + this.currentDate);
      } else {
        alert('NO DATA FOUND!');
      }
    } else {
      alert('NOT ALLOWED!');
    }
  }

  stopScanner() {
    BarcodeScanner.stopScan();
    this.scanActive = false;


  }

  ionViewWillLeave() {
    BarcodeScanner.stopScan();
    this.scanActive = false;
  }

  async showPrompt() {
    const prompt = await this.alertCtrl.create({
      header: 'Asistencia',
      message: 'asistido',
      buttons: [
        {
          text: 'Save',
          handler: data => {
           this.getGuru();
          }
        }
      ]
    });
    await prompt.present();
  }

  getGuru(){
    this.asistencia.fecha = this.currentDate;
    this.asistencia.mensaje = this.mensaje;
    this.usuarioService.addAsistencia(this.asistencia);
  }

  getNombreUsuario(){

  }
>>>>>>> Stashed changes
}

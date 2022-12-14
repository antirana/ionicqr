import { Component, OnInit} from '@angular/core';
import QRCode from 'qrcode';
import { DatePipe } from '@angular/common';
import { UsuarioService} from 'src/app/services/usuario.service';
import { Auth } from '@angular/fire/auth';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-codigo',
  templateUrl: './codigo.page.html',
  styleUrls: ['./codigo.page.scss'],
})
export class CodigoPage {
  scanActive: boolean = false;
  code = '';
  generated = '';
  alumno = false;
  admin = false;
  Uid:string;
  private res;
  fecha = '';
  currentDate = new Date().toString();;



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
      document.querySelector('bodyy').classList.add('scanner-active');
      this.scanActive = true;
      BarcodeScanner.hideBackground();

      const result = await BarcodeScanner.startScan();

      if (result.hasContent) {
        this.scanActive = false;
        alert(result.content); //The QR content will come out here
        //Handle the data as your heart desires here
      } else {
        alert('NO DATA FOUND!');
      }
    } else {
      alert('NOT ALLOWED!');
    }
  }

  stopScanner() {
    document.querySelector('bodyy').classList.remove('scanner-active');
    BarcodeScanner.stopScan();
    this.scanActive = false;


  }

  ionViewWillLeave() {
    BarcodeScanner.stopScan();
    this.scanActive = false;
  }


}

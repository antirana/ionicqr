import { Component} from '@angular/core';
import QRCode from 'qrcode';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-codigo',
  templateUrl: './codigo.page.html',
  styleUrls: ['./codigo.page.scss'],
})
export class CodigoPage {
  code = '';
  generated = '';

  fecha = '';
  currentDate = new Date().toString();;



  displayQrCode() {
    return this.generated !== '';
  }
  constructor() {
    let date = new Date();
    console.log("Current Date ",date);
  }

  process() {
    const qrcode = QRCode;
    const self = this;
    const fecha = this.currentDate;
    qrcode.toDataURL(self.code,{ errorCorrectionLevel: 'H' }, function (err, url) {
      self.generated = url;
    })
  }
}


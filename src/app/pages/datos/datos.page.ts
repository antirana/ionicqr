import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
  miModelo: any;

  constructor(    public navCtrl:   NavController,
    public alertCtrl: AlertController) { this.miModelo = {};}

  ngOnInit() {
  }

}

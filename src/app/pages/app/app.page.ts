import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
})
export class AppPage implements OnInit {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'About', url: '/about', icon: 'information-circle' },
    { title: 'QR', url:'/codigo', icon:'qr-code'},
    { title: 'Clima', url:'/clima', icon:'sunny'},
    { title: 'Cuenta', url: '/folder/Cuenta', icon: 'person-circle' },
    { title: 'Salir', url:'/login' ,icon:'log-out'},
  ];

  constructor() { }

  ngOnInit() {
  }

}

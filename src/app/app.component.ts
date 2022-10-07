import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'About', url: '/about', icon: 'information-circle' },
    { title: 'QR', url:'/codigo', icon:'qr-code'},
    { title: 'Cuenta', url: '/folder/Cuenta', icon: 'person-circle' },
    { title: 'Salir', url:'/login' ,icon:'log-out'}
  ];

  constructor(
    private platform: Platform,
    public router: Router
  ) {this.initializeApp();}

  initializeApp(){
    this.platform.ready().then(()=>{
      this.router.navigateByUrl('splash');
    });
  };
}

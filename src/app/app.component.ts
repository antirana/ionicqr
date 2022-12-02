import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Auth, EmailAuthCredential, user, User } from '@angular/fire/auth';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],

  
})
export class AppComponent {
  email: string;
 

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'About', url: '/about', icon: 'information-circle' },
    { title: 'QR', url:'/codigo', icon:'qr-code'},
    { title: 'Clima', url:'/clima', icon:'sunny'},
    { title: 'Cuenta', url: '/folder/Cuenta', icon: 'person-circle' },
    { title: 'Salir', url:'/login' ,icon:'log-out'},
  ];




  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private platform: Platform,
    public router: Router,
    

    
  ) {this.initializeApp();
    this.getUserProfile();
  }

  initializeApp(){
    this.platform.ready().then(()=>{
      this.router.navigateByUrl('splash');
      
    });
  };
  async getUserProfile(){
    const user = this.auth.currentUser;
    this.email = user.email;
    console.log(this.email);
    
    
  }
}

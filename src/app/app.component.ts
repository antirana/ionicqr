import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Auth, EmailAuthCredential, user, User, signOut } from '@angular/fire/auth';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],

  
})
export class AppComponent {
  email: string;
 
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
  }
  async logout(){
    return signOut(this.auth);
  }
}

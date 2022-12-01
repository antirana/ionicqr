import { Component } from '@angular/core';
import { Auth, EmailAuthCredential, user, User } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email:string;

  constructor(    private auth: Auth,
    ) {}
  async getUserProfile(){
    const user = this.auth.currentUser;
    this.email = user.email;
    console.log(this.email);
    
    
  }
}

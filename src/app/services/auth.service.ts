import { Injectable } from '@angular/core';
import { Auth , sendPasswordResetEmail , createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, confirmPasswordReset} from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:Auth, public toastController: ToastController) { }
  async register(email:string,password:string){
    try {
      const user = await createUserWithEmailAndPassword(this.auth, email, password);
      return user;
      
    } catch (error) {
      return null;
      
    }
  }
  async login(email:string,password:string){
    try {
      const user = await signInWithEmailAndPassword(this.auth, email,password);
      return user;
      
    } catch (error) {
      return null;
      
    }
  }

  logout(){
    return signOut(this.auth);
  }
  async requestPassword(email: string) {
    return await sendPasswordResetEmail(this.auth,email).catch((error) => {
      this.toastError(error);
      throw new Error(error);
    });
  } 

  async resetPassword(passsword: string, oobCode: string) {
    return await confirmPasswordReset(this.auth, oobCode, passsword)
      .catch((error) => {
        this.toastError(error);
        throw new Error(error);
      });
  }

  async toastError(error: any) {
    const toast = await this.toastController.create({
      message:
        (error.message as string).split(': ')[1] || 'Algo malo ha ocurrido',
      duration: 4000,
      color: 'danger',
    });
    toast.present();
  }

}

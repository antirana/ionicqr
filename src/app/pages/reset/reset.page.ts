import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController, LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {

  formularioReset!: FormGroup;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
  }

  get email() {
    return this.formularioReset?.get('email');
  }

  createForm() {
    this.formularioReset = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
    });
  }


  async valida() {
    if (this.formularioReset.valid) {
      const email  = this.formularioReset.value.email;
      const loading = await this.loadingCtrl.create();
      this.authService
        .requestPassword(email)
        .then(() => {
          this.alertPresent('Correo enviado ', this.formularioReset.value.email);
          this.router.navigate(['/login']);
          this.loading = false;
        })
        .catch(() => (this.loading = false));

  
    }
    else {
      this.alertPresent('Ingreso fallido', 'Revise bien los datos ingresado');
    }



  }


  async alertPresent(header: string, message: string) {
  const alert = await this.alertCtrl.create({
    header: header,
    message: message,
    buttons: ['OK']
  });
  alert.present();
}

}

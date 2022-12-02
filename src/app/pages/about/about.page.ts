import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  private about = [
    {
      id:'2',
      nombre:'Nicolas Ruiz',
      descripcion:'Tengo 19 años interesado en el   desarrollo de aplicaciones movil y web',
      imagen:'assets/about_1.jpeg'

    },
    {
      id:'3',
      nombre:'Cristhian Barreno',
      descripcion:'Tengo 22 años interesado en   la ciberseguridad',
      imagen:'assets/about_2.jpeg'

    }
  ]


  constructor() { }

  ngOnInit() {

  }

}

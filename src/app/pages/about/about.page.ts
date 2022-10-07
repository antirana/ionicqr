import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  logo:string;
  foto:string;
  private about = [
    {
      id:'1',
      nombre:'Bastian Lisboa',
      descripcion:'el mas lanzao',
      imagen: 'assets/about_3.jpeg  '

    },
    {
      id:'2',
      nombre:'Nicolas Ruiz',
      descripcion:'el mas malvao',
      imagen:'assets/about_1.jpeg'

    },
    {
      id:'3',
      nombre:'Cristhian Barreno',
      descripcion:'Interesado en el amor y la ciber seguridad',
      imagen:'assets/about_2.jpeg'

    }
  ]


  constructor() { }

  ngOnInit() {
    this.logo ="https://cdn.freebiesupply.com/logos/large/2x/visa-logo-png-transparent.png";
    this.foto="https://pbs.twimg.com/profile_images/1074190898198659076/qaqhySAU_400x400.jpg";
  }

}

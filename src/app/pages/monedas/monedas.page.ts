import { Component, OnInit } from '@angular/core';
import { ServicemonedasService } from 'src/app/services/servicemonedas/servicemonedas.service';

@Component({
  selector: 'app-monedas',
  templateUrl: './monedas.page.html',
  styleUrls: ['./monedas.page.scss'],
})
export class MonedasPage implements OnInit {
  private res;
  monedas = [];

  constructor(private coinAPi: ServicemonedasService) { }

  ngOnInit() {
    this.getCoinData();
  }
  getCoinData(){
    this.coinAPi.getCoinData().subscribe((response)=>{
      this.res = response;
      console.log(this.res);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ServiceclimaService } from 'src/app/services/serviceclima/serviceclima.service';
@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {
  private res;

  constructor(private weatherAPI: ServiceclimaService) { }

  ngOnInit() {
    this.getWeatherData();
  }
  
  getWeatherData(){
    this.weatherAPI.getWeatherData().subscribe((response)=>{
      this.res = response;
      console.log(this.res);
    })};
}

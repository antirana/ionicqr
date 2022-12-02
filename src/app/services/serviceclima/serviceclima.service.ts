import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Geolocation, Geoposition } from '@awesome-cordova-plugins/geolocation/ngx';
import { NavController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ServiceclimaService {

  constructor(private http: HttpClient,) { }



  getWeatherData(): Observable<any>{
    let lat = -33.3042517;
    let lon = -70.7028623;
    let queryString = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=453a48cb8acfdae481c32b0282590ad8`;
    return this.http.get(queryString);
  }
  
}

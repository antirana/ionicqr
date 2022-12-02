import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicemonedasService {

  constructor(private http: HttpClient) { }

  getCoinData(): Observable<any>{
    let queryString = `https://mindicador.cl/api`;
    return this.http.get(queryString);
  }
}

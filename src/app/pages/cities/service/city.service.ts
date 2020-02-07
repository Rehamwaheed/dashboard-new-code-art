import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CityModel } from '../model/city-model';

@Injectable({
  providedIn: 'root'
})
export class CityService {

   
  constructor(private http: HttpClient) { 
   
  }

  getcity(): Observable<object> {
    return this.http.get(`http://fakrah.com/dashboard/cities`);
}

postcity(city:CityModel) {
  return this.http.post(`http://fakrah.com/dashboard/cities`,city);
}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryModel } from '../model/country-model';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  

 
  constructor(private http: HttpClient) { 
   
  }

  getcountry(): Observable<object> {
    return this.http.get(`http://fakrah.com/dashboard/countries`);
}

postcountry(country:CountryModel) {
  return this.http.post(`http://fakrah.com/dashboard/countries`,country);
}
}

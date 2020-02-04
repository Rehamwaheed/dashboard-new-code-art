
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceProviderModel } from '../model/service-provider-model';
@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

  constructor(private http: HttpClient) { 
   
  } 

  getprovider(): Observable<object> {
    return this.http.get(`http://fakrah.com/dashboard/service-provider`);
}

postprovider(provider:ServiceProviderModel) {
  return this.http.post(`http://fakrah.com/dashboard/service-provider`,provider);
}
headers = new HttpHeaders();
onuploadSubmit(filedata){ 
    this.headers.append('Accept', 'application/json',);
    return this.http.post('http://fakrah.com/api/upload/image', filedata, {headers: this.headers
});

}

}

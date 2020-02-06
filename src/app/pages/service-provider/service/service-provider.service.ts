
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceProviderModel } from '../model/service-provider-model';
@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {
  headers = new HttpHeaders();
  constructor(private http: HttpClient) { 
   
  } 

  private setwithImageHeaders(): HttpHeaders {

    let headersConfig =
      {
        'Content-Type': 'multipart/form-data;charset=utf-8; boundary=' + Math.random().toString().substr(2),
        'Accept': 'application/json',
      };
    return new HttpHeaders(headersConfig);
  }
  
  upload( uploadFile: Object) {
    console.log(this.setwithImageHeaders())
    return this.http.post(`http://fakrah.com/api/upload/image`, uploadFile,{ headers: this.setwithImageHeaders() })
  }
  getprovider(): Observable<object> {
    return this.http.get(`http://fakrah.com/dashboard/service-provider`);
}

postprovider(provider:ServiceProviderModel) {
  return this.http.post(`http://fakrah.com/dashboard/service-provider`,provider);
}

onuploadSubmit(filedata):Observable<object>{ 
    this.headers.append('Accept', 'application/json',);
    return this.http.post('http://fakrah.com/api/upload/image', filedata, {headers: this.headers});

}

}

import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceModal } from '../modal/service-modal';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

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
  getservice(): Observable<object> {
    return this.http.get(`http://fakrah.com/dashboard/service-provider-service`);
}

postservice(service:ServiceModal) {
  return this.http.post(`http://fakrah.com/dashboard/service-provider-service`,service);
}

onuploadSubmit(filedata):Observable<object>{ 
    this.headers.append('Accept', 'application/json',);
    return this.http.post('http://fakrah.com/api/upload/image', filedata, {headers: this.headers});

}

}

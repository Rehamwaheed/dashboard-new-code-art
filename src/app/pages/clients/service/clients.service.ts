import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientsModel } from '../model/clients-model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { 
   
  } 

  getclients(): Observable<object> {
    return this.http.get(`http://fakrah.com/dashboard/clients`);
}

postclients(client:ClientsModel) {
  return this.http.post(`http://fakrah.com/dashboard/clients`,client);
}
getcity(): Observable<object> {
  return this.http.get(`http://fakrah.com/dashboard/cities`);
}
}

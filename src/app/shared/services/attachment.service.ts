import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AttachmentService {

  constructor( private http: HttpClient) { }
 
  headers = new HttpHeaders();
onuploadSubmit(filedata){ 
    this.headers.append('Accept', 'application/json',);
    return this.http.post('http://fakrah.com/api/upload/image', filedata, {headers: this.headers
});

}
}

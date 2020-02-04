import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryModel } from '../model/category-model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

 
  constructor(private http: HttpClient) { 
   
  } 

  getcategory(): Observable<object> {
    return this.http.get(`http://fakrah.com/dashboard/category`);
 }

postcategory(client:CategoryModel) {
  return this.http.post(`http://fakrah.com/dashboard/category`,client);
}
}

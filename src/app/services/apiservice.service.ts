import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http : HttpClient) { }

  postContact(data : any){
    return this.http.post<any>("http://localhost:3000/login/",data);
  }

  getContact(){
    return this.http.get<any>("http://localhost:3000/login/");
  }

  getUserName(){
    return localStorage.getItem('email');
  }

}

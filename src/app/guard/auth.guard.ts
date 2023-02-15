import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ApiserviceService } from '../services/apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private api : ApiserviceService, public router : Router){}

  canActivate():boolean{
    if(this.api.getUserName())
      return true; 
    else  { 
      this.router.navigate([''])
      return false
    }
  }
  
}

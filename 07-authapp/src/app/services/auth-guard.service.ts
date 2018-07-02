import { AuthService } from './auth.service';

import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate
} from "@angular/router";



@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth:AuthService) { }

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    console.log(next);
    
    if (this.auth.isAuthenticated()) {
      console.log("PASO EL GUARD");
      return true;
    }else{
      console.error("Bloqueado por el GUARD");
      return false
    }
  }
}

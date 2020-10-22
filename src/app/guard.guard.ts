import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import{AuthServiceService}from'./auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
   
   if(this._AuthServiceService.currentUser.getValue()!=null)  
   
   {
            
    return true;

   }
  
  
    }
  constructor( private _AuthServiceService:AuthServiceService,private  _Router:Router)
  {


  }
}

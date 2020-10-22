import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor(private _HttpClient:HttpClient) 
  {

 
     }

   getAllUses():Observable<any>
   {

     return this._HttpClient.get('https://randomuser.me/api/?results=100');

   }

}

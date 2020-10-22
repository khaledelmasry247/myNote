import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject, from } from 'rxjs';
import{HttpClient}from'@angular/common/http'; 
// import{UserDate}from'./userDate';
import{Router}from'@angular/router';
import { JSDocTagName } from '@angular/compiler/src/output/output_ast';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

currentUser= new BehaviorSubject(null);
user:any;
  baseUrl='https://routeegypt.herokuapp.com/';
  constructor(private _HttpClient:HttpClient,private _Router:Router) { 

if(localStorage.getItem('userData')!=null)
{

this.currentUser.next(JSON.parse(localStorage.getItem('userData')));
// this.currentUser.next(this.currentUser.value);
// console.log(this.currentUser);

}

// ahmed@123
// Ahmed

  }



getSignUp(data):Observable<any>
{

return this._HttpClient.post(this.baseUrl+'signup',data);



}


getSignIn(data):Observable<any>
{

  return this._HttpClient.post(this.baseUrl+'signin',data);
 
// console.log(this._HttpClient.post(this.baseUrl+'signin',data));

}


 

saveDate(token)
{
  
    this.currentUser.next(token);

localStorage.setItem('userData',JSON.stringify(token));

console.log(this.currentUser);


}

logout()
{
this.currentUser.next(null);
localStorage.clear(); 
this._Router.navigate(['/sign-in']);


}

}



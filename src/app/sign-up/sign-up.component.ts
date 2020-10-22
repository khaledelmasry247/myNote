import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl, Validators}from'@angular/forms';
import{AuthServiceService}from'../auth-service.service';
import { from } from 'rxjs';
import{Router}from'@angular/router';
declare var particlesJS :any;
// 
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


register:FormGroup=new FormGroup({
  'first_name':new FormControl(null,[Validators.required]),
  'last_name':new FormControl(null,[Validators.required]),
  'email':new FormControl(null,[Validators.required,Validators.email]),
  'password':new FormControl(null,[Validators.required]),
  'repassword':new FormControl(null,[Validators.required]),

});
success:boolean=false;
isWait:boolean=false;
successMg:string;
erorMg:boolean=false;
  constructor(private _AuthServiceService:AuthServiceService,private _Router:Router) { }

  ngOnInit(): void {
    particlesJS.load('particles-js', 'assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });

  }


formDate(info)
{

  console.log(info);
  this.isWait=true;

             if(this.register.valid)
             {
     
               this._AuthServiceService.getSignUp(info.value).subscribe((res)=>{

                  if(res.message=="success")
                  {
                   console.log(res);
                  this.success=true;
                  this.successMg=res.message;
                  console.log(res.token);
                  this.isWait=false;
                  this._Router.navigate(['/sign-in']);
                  }else{        


this.erorMg=true;
this.isWait=false;
this.register.reset();

                            }




               })



             }
             
              

}

}

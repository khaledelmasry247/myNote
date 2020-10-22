
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { from } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
declare var particlesJS:any;
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {


  isflag: boolean = false;

  signIn: FormGroup = new FormGroup({
    'email': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required),

  });

  constructor(private _AuthServiceService: AuthServiceService, private _Router: Router) {



    particlesJS.load('particles-js', 'assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });



  }

  ngOnInit(): void {
    // particlesJS.load('particles-js', 'assets/particles.json', function() {
    //   console.log('callback - particles.js config loaded');
    // });
  }





  signDate(info) {

    if (this.signIn.valid) {

      this._AuthServiceService.getSignIn(info.value).subscribe((data) => {

        if (data.message == "success") {
          console.log(data.token);
          this._AuthServiceService.saveDate(data.token);
          // localStorage.setItem('userData2',JSON.stringify(data.token));
          this._Router.navigate(['/profile']);
          this.isflag = false;

        } else {
          this.isflag = true;
          // this._Router.navigate(['/sign-up']);

        }



      })



    }



  }
}
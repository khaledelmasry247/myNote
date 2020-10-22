import { Component, OnInit } from '@angular/core';
import{AuthServiceService}from'../auth-service.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 isflag:boolean=false;
  constructor(private _AuthServiceService:AuthServiceService) { 


_AuthServiceService.currentUser.subscribe((data)=>{

if(data!=null)
{
  this.isflag=true;
}else{

  this.isflag=false;
}

})

  }


logout()
{

 this._AuthServiceService.logout();
 


}

  ngOnInit(): void {
  }

}

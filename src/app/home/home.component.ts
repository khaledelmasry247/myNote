import { Component, OnInit } from '@angular/core';
import{RandomService}from'../random.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users:any;
  totalRecords: number;
  page: number = 1
  constructor(private _RandomService:RandomService) {
   
    this._RandomService.getAllUses().subscribe((res)=>{

        
         this.users= res.results;
        this.totalRecords = res.total_pages;

         console.log(this.totalRecords);
           
    })

   }

  ngOnInit(): void {
    
  }

}

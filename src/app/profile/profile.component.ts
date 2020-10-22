import { Component, OnInit, ɵConsole } from '@angular/core';
import { NotesService } from '../notes.service';
import jwt_decode from "jwt-decode";
import { FormGroup, FormControl } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';


declare var particlesJS: any;
declare var $ :any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  AllNotes;
  token: any;
  decoded: any;
  token2: any;
  isload:boolean=false;
  isSend:boolean=false;
  del:boolean=false;
  Note_ID;
  term:string;
  title:string;
  // contractor

  constructor(private _NotesService: NotesService) {
 
   
    

      this.token = JSON.parse(localStorage.getItem('userData'));
      // console.log(this.token);
      this.decoded = jwt_decode(this.token);
      console.log(this.decoded._id);
      this.display();

  }


  // display method
  display()
  {
     
      let dataNote1 = {
      token: this.token,
      userID: this.decoded._id
      
      
   };

    this._NotesService.getAllNote(dataNote1).subscribe((res) => {


      if (res.message == 'success')
       {
         this.isload=true;
        this.AllNotes = res.Notes;
      }else if(res.message=="no notes found")
      {
        this.isload=true;
        console.log(res);

      }

    })



 }



////////////////add method
  addNotes: FormGroup = new FormGroup({

    'title': new FormControl(),
    'desc': new FormControl()

  });

  ngOnInit(): void {



 
  }




  addInfo() {



    let mydata = {
      title: this.addNotes.value.title,
      desc: this.addNotes.value.desc,
      token: this.token,
      citizenID: this.decoded._id
    }



    this._NotesService.AddNote(mydata).subscribe((res) => {

      if (res.message == 'success') {

        this.isSend=true;
        $("#Add_Note").modal('hide');
        this.display();
        this.isSend=false;
        this.addNotes.reset();

      }    

    })


  }

// ===========================Delete Note method

get_ID(id)
{
 this.Note_ID=id;
console.log(this.Note_ID);

}


delete_Note()
{

  let data={
   token:this.token,
   NoteID:this.Note_ID

  }
this._NotesService.Delete_Note(data).subscribe((res)=>{

console.log(res);
$('#DeleteBtn').modal('hide');
this.display();

})

}



editForm:FormGroup=new FormGroup({

 'title':new FormControl(),
 'desc':new FormControl()
  

});



  EditNote()
  {

  for(let i=0;i<this.AllNotes.length;i++)
{

  // console.log(this.AllNotes[i]);
  if(this.AllNotes[i]._id==this.Note_ID)
  {
console.log(this.AllNotes[i]);


    this.editForm.controls.title.setValue(this.AllNotes[i].title);
  
    this.editForm.controls.desc.setValue(this.AllNotes[i].desc);


  }


}
 }


 Edit_Sent()
{

let  data={
             token:this.token,
             title:this.editForm.value.title,
             desc:this.editForm.value.desc,
             NoteID:this.Note_ID  

}

  this._NotesService.update(data).subscribe((res)=>{

  if(res.message=='updated')

      $('#edit_Note').modal('hide');
      this.display();


  })

}





}

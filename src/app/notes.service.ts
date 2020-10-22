import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  baseUrl = 'https://routeegypt.herokuapp.com/';
  constructor(private _HttpClient: HttpClient) { }





  getAllNote(data): Observable<any> {
    return this._HttpClient.post(this.baseUrl + 'getUserNotes', data)
  }



  AddNote(data): Observable<any> {
    return this._HttpClient.post(this.baseUrl + 'addNote', data)
  }




  Delete_Note(data): Observable<any> {

    let options = {

      headers: new HttpHeaders({

      }),


      body: {
        NoteID: data.NoteID,
        token: data.token
      }


    }



    return this._HttpClient.delete(this.baseUrl + 'deleteNote', options)

  }


  update(data):Observable<any>
  {

 return this._HttpClient.put(this.baseUrl+'updateNote',data);

  }




}




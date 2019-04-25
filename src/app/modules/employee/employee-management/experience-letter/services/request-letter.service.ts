import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { RequestLetter } from '../modals/request-letter.modal';

const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class RequestLetterService {

  constructor(private http:HttpClient) { }
  private requestLetterUrl= "http://localhost:8080/request-letter";

  public getAllRequestLetter(){
    return this.http.get<RequestLetter[]>(this.requestLetterUrl);
  }

  public createRequestLetter(requestLetter: RequestLetter){
    return this.http.post<RequestLetter>(this.requestLetterUrl,requestLetter);
  }

  public updateRequestLetter(requestLetter){
    return this.http.put<RequestLetter>(this.requestLetterUrl +"/"+ requestLetter.id, requestLetter);
  }

  public deleteRequestLetter(requestLetter){
    return this.http.delete<RequestLetter>(this.requestLetterUrl + "/"+ requestLetter.id);
  }

}

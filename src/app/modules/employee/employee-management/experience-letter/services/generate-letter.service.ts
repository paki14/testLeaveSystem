import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { GenerateLetter } from '../modals/generate-letter.modal';


const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class GenerateLetterService {

  constructor(private http:HttpClient) { }
  private generateLetterUrl= "http://localhost:8080/generate-letter";

  public getAllLetter(){
    return this.http.get<GenerateLetter[]>(this.generateLetterUrl);
  }

  public createLetter(generateLetter){
    return this.http.post<GenerateLetter>(this.generateLetterUrl,generateLetter);
  }

  public updateLetter(generateLetter){
    return this.http.put<GenerateLetter>(this.generateLetterUrl +"/"+ generateLetter.id, generateLetter);
  }

  public deleteLetter(generateLetter){
    return this.http.delete<GenerateLetter>(this.generateLetterUrl + "/"+ generateLetter.id);
  }

}

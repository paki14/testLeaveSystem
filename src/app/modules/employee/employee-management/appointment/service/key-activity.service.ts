import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { KeyActivity } from '../models/key-activity.model';

const HttpOptions ={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class KeyActivityService {

  constructor(private http:HttpClient) { }
 private keyUrl='http://localhost:8100/hrm_system/keyactivity';

 getAllKeyActivity(){
  return this.http.get<KeyActivity[]>(this.keyUrl);
 }
}

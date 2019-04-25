import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Referee } from './referee.model';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
const httpOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class RefereesService {

  constructor(private httpObj:HttpClient) { }
  private refereeurl = "http://localhost:8101/hrm_system/referee";

  getReferee(){
    return this.httpObj.get<Referee[]>(this.refereeurl);
  }
  addReferee(data){
    return this.httpObj.post<Referee>(this.refereeurl,data);
  }
  GetRefereeByUserId(userId){
    return this.httpObj.get<Referee[]>(this.refereeurl+"/"+userId)
  }
  deleteReferee(num){
    return this.httpObj.delete<Referee>(this.refereeurl+"/"+num.id)
  }
 
  editReferee(edit){
    return this.httpObj.put<Referee>(this.refereeurl+"/"+edit.id,edit);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RejectCarryforward } from 'src/app/models/leave-management/reject-carryforward';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RejectCarryforwardRequestService {

  constructor(private http: HttpClient) { }
  private rejectUrl="http://localhost:8050/hrm_system/rejectCarry/reject"

  public getRejectCarryrequest(username){
    return this.http.get<RejectCarryforward>(this.rejectUrl+"/"+username)
  }
}

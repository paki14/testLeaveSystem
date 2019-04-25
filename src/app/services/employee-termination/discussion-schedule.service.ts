import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { DiscussionSchedule } from 'src/app/models/employee-termination/discussion-schedule';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DiscussionScheduleService {

  constructor(private httpObj: HttpClient) { }

  public getDiscussionSchedule(){
    return this.httpObj.get<DiscussionSchedule[]>("http://localhost:8080/hrm_system/discussionSchedule");
  }

  public createDiscussionSchedule(discussionSchedule){
    return this.httpObj.post<DiscussionSchedule>("http://localhost:8080/hrm_system/discussionSchedule",discussionSchedule);
  }
}

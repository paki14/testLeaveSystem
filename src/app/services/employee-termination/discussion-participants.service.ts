import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { DiscussionParticipants } from 'src/app/models/employee-termination/discussion-participants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DiscussionParticipantsService {

  constructor(private httpObj: HttpClient) { }

  public getDiscussionParticipants(){
    return this.httpObj.get<DiscussionParticipants[]>("http://localhost:8080/hrm_system/discussionParticipants");
  }

  public createDiscussionParticipants(discussionParticipants){
    return this.httpObj.post<DiscussionParticipants>("http://localhost:8080/hrm_system/discussionParticipants",discussionParticipants);
  }
}

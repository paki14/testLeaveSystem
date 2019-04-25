import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { InterviewSelection } from '../Modal/interview-selection';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class InterviewSelectionService {

  constructor(private httpObj:HttpClient) { }

  recodOfApplicantSaveUrl="http://localhost:8080/hrm_system/interviewSchedule";

  postApplicantsSelect(applicantCvSelectedData){
    return this.httpObj.post<InterviewSelection>(this.recodOfApplicantSaveUrl,applicantCvSelectedData);
    
  }
}

import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { InterviewSelectionRejected } from '../Modal/interview-selection-rejected';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class InterviewRejectedService {

  constructor(private httpObj:HttpClient) { }

  recodOfApplicantRejectedUrl="http://localhost:8080/hrm_system/rejectedApplicant";

  postApplicantsRejected(applicantCvRejectData){
    return this.httpObj.post<InterviewSelectionRejected>(this.recodOfApplicantRejectedUrl,applicantCvRejectData);
    
  }
}

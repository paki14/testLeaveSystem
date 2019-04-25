import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RecordApplicantCv } from '../Modal/record-applicant-cv';
// import { ViewRecordApplicantCv } from '../Modal/view-record-applicant-cv';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RecordApplicantCvService {

  constructor(private httpObj: HttpClient) {

  }
  recodOfApplicantUrl = "http://localhost:8080/hrm_system/applicant";


  getAllApplicants() {
    return this.httpObj.get<RecordApplicantCv[]>(this.recodOfApplicantUrl);
  }

  postApplicants(applicantCvData) {
    return this.httpObj.post<RecordApplicantCv>(this.recodOfApplicantUrl, applicantCvData);

  }

  deleteApplicants(applicantCvData) {
    return this.httpObj.delete<RecordApplicantCv>(this.recodOfApplicantUrl + "/" + applicantCvData.id, applicantCvData)
  }

  updateRecordOfApplicantCvVacancy(applicantCvData){
    return this.httpObj.put<RecordApplicantCv>(this.recodOfApplicantUrl + "/" + applicantCvData.id, applicantCvData)
  }

  

}

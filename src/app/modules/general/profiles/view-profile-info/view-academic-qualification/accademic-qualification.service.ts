import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AcademicQualification } from './academic-qualification';
import { isThisISOWeek } from 'date-fns';

const httpOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class AccademicQualificationService {
  academic:AcademicQualification[]
  constructor(private httpObj:HttpClient) { }
  private AcademicUrl = "http://localhost:8100/hrm_system/academicQualification";

  getAcademicQualification(){
    return this.httpObj.get<AcademicQualification[]>(this.AcademicUrl);
  }
  getAcademicQualificationByUserId(uid){
    return this.httpObj.get<AcademicQualification[]>(this.AcademicUrl+"/"+uid);
  }
  updateAcademicQualification(academic){
    return this.httpObj.put<AcademicQualification>(this.AcademicUrl+"/edit/"+academic.id,academic);
  }
  deleteAcademicQualificationa(data){
    return this.httpObj.delete<AcademicQualification>(this.AcademicUrl+"/"+data.id)
  }
  public addAcademicQualification(academicObj){
    return this.httpObj.post<AcademicQualification>(this.AcademicUrl,academicObj);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AcademicQualification } from './academic-qualification.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  
@Injectable({
  providedIn: 'root'
})
export class AcademicQualificationService {

  constructor(private http:HttpClient) { }
  
  private acaQualurl='http://localhost:8100/hrm_system/academicQualification';
  
  public addAcademicQualification(academicObj){
    return this.http.post<AcademicQualification>(this.acaQualurl,academicObj);
  }
  getAcademicQualificationByUserId(uid){
    return this.http.get<AcademicQualification[]>(this.acaQualurl+"/"+uid);
  }
  getAcademicQualification(){
    return this.http.get<AcademicQualification[]>(this.acaQualurl);
  }
  updateAcademicQualification(data){
    return this.http.put<AcademicQualification>(this.acaQualurl+"/edit/"+data.id,data);
  }
  deleteAcademicQualificationa(data){
    return this.http.delete<AcademicQualification>(this.acaQualurl+"/"+data.id)
  }
}
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ProfessionalQualification } from './professional-qualification.model';

const httpOption={
  headers:new HttpHeaders({'content-Type':'application/jsonm'})
};

@Injectable({
  providedIn: 'root'
})
export class ProfessionalQualificationService {

  constructor(private http:HttpClient) { }
  private proQualificationUrl="http://localhost:8100/hrm_system/professionalQualification";

  getAllEmpProQualification(){
    return this.http.get<ProfessionalQualification[]>(this.proQualificationUrl);
  }
  createEmpProQualification(data){
    return this.http.post<ProfessionalQualification>(this.proQualificationUrl,data);
  }
  getEmpProQualificationByUserId(uid){
    return this.http.get<ProfessionalQualification[]>(this.proQualificationUrl+"/"+uid);
  }
  editProQualification(data){
    return this.http.put<ProfessionalQualification>(this.proQualificationUrl+"/edit/"+data.id,data)
  }
  deleteProQualification(data){
    return this.http.delete<ProfessionalQualification>(this.proQualificationUrl+"/"+data.id)
  }
}

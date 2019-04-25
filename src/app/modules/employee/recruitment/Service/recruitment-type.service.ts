import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RecruitmentType } from '../Modal/recruitment-type';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class RecruitmentTypeService {

  constructor(private httpObj:HttpClient) { }
  recruitmentTypeUrl="http://localhost:8080/hrm_system/recruitmentType";

  getAllRecruitmentType(){
    return this.httpObj.get<RecruitmentType[]>(this.recruitmentTypeUrl);
  }
  
  createRecruitmentType(recruitmentTypedata){
    return this.httpObj.post<RecruitmentType>(this.recruitmentTypeUrl,recruitmentTypedata);
  }

  deleteRecruitmentType(recruitmentTypedata){
    return this.httpObj.delete<RecruitmentType>(this.recruitmentTypeUrl+"/"+recruitmentTypedata.id,recruitmentTypedata)
  }
  
  updateRecruitmentType(recruitmentTypedata){
    return this.httpObj.put<RecruitmentType>(this.recruitmentTypeUrl+"/"+recruitmentTypedata.id,recruitmentTypedata)
  }
}

import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HighestQualification } from '../Modal/highest-qualification';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class HighestQualificationService {

  constructor(private httpObj:HttpClient) { }
  highestQualificationUrl="http://localhost:8080/hrm_system/highestQualification";

  getAllHighestQualification(){
    return this.httpObj.get<HighestQualification[]>(this.highestQualificationUrl);
  }
  
  createHighestQualification(departmentdata){
    return this.httpObj.post<HighestQualification>(this.highestQualificationUrl,departmentdata);
  }

  deleteHighestQualification(departmentdata){
    return this.httpObj.delete<HighestQualification>(this.highestQualificationUrl+"/"+departmentdata.id,departmentdata)
  }
  
  updateHighestQualification(departmentdata){
    return this.httpObj.put<HighestQualification>(this.highestQualificationUrl+"/"+departmentdata.id,departmentdata)
  }
}

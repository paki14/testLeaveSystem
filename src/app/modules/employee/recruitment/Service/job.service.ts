import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Department } from '../Modal/department';
import { Job } from '../Modal/job';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private httpObj:HttpClient) { }
  jobUrl="http://localhost:8080/hrm_system/job";

  getAllJob(){
    return this.httpObj.get<Job[]>(this.jobUrl);
  }
  
  createJob(departmentdata){
    return this.httpObj.post<Job>(this.jobUrl,departmentdata);
  }

  deleteJob(departmentdata){
    return this.httpObj.delete<Job>(this.jobUrl+"/"+departmentdata.id,departmentdata)
  }
  
  updateJob(departmentdata){
    return this.httpObj.put<Job>(this.jobUrl+"/"+departmentdata.id,departmentdata)
  }
}

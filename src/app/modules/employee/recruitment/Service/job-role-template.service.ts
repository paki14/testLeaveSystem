import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { JobRoleTemplate } from '../Modal/job-role-template';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class JobRoleTemplateService {
  constructor(private httpObj:HttpClient) { }
  jobRoleTemplateUrl="http://localhost:8080/hrm_system/jobRoleTemplate";

  getAllJobRoleTemplate(){
    return this.httpObj.get<JobRoleTemplate[]>(this.jobRoleTemplateUrl);
  }
  
  postJobRoleTemplate(jobdata){
    return this.httpObj.post<JobRoleTemplate>(this.jobRoleTemplateUrl,jobdata);
  }

  deleteJobRoleTemplate(jobdata){
    return this.httpObj.delete<JobRoleTemplate>(this.jobRoleTemplateUrl+"/"+jobdata.id,jobdata)
  }
  
  updateJobRoleTemplate(jobdata){
    return this.httpObj.put<JobRoleTemplate>(this.jobRoleTemplateUrl+"/"+jobdata.id,jobdata)
  }
}
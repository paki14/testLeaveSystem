import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ScheduleParPost } from '../models/schedule-par-post.model';
import { ScheduleParGet } from '../models/schedule-par-get.model';
import { Par } from '../models/par.model';
import { EmployeeDetails } from '../models/employee-details.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleParService {

  constructor(private http: HttpClient){}

  private sheduleparUrl = 'http://localhost:8081/hrm_system/schedulepar';

  public addSchedulePar(par) {
    return this.http.post<ScheduleParPost>(this.sheduleparUrl,par);
  }

  public getSchedulePar() {
    return this.http.get<Par[]>(this.sheduleparUrl);
  }

  public getScheduleParData(parId) {
    return this.http.get<ScheduleParGet>(this.sheduleparUrl+"/par/"+parId);
  }
  public getEmployeeName(empName){
    return this.http.get<EmployeeDetails[]>(this.sheduleparUrl+"/empname/"+empName);
  }
  public getEmpName(){
    return this.http.get<EmployeeDetails[]>(this.sheduleparUrl+"/empname");
  }
}

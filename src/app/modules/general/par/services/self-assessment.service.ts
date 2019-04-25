import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReportParAppraiseePost } from '../models/report-par-appraisee-post';
import { ReportParAppraiseeGet } from '../models/report-par-appraisee-get.model';


@Injectable({
  providedIn: 'root'
})
export class SelfAssessmentService {

  constructor(private http: HttpClient){}

  private reportParApprasiseeUrl = 'http://localhost:8081/hrm_system/parreportappraisee';

  public apprasiseeApplyScore(parscore,reportParId) {
    return this.http.put<ReportParAppraiseePost>(this.reportParApprasiseeUrl+"/"+reportParId,parscore);
  }

  public getParAppraiseeByParId(parId) {
    return this.http.get<ReportParAppraiseeGet[]>(this.reportParApprasiseeUrl+"/"+parId);
  }

  // public getScheduleParData(parId) {
  //   return this.http.get<ScheduleParGet>(this.sheduleparUrl+"/par/"+parId);
  // }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReportParAppraiserGet } from '../models/report-par-appraiser-get.model';
import { ReportParAppraiserPost } from '../models/report-par-appraiser-post';

@Injectable({
  providedIn: 'root'
})
export class AppraiserAssesmentService {

  constructor(private http: HttpClient){}

  private reportParApprasiseeUrl = 'http://localhost:8081/hrm_system/parReportAppraiser';

  public apprasiserPutScore(parscore,reportParId) {
    return this.http.put<ReportParAppraiserPost>(this.reportParApprasiseeUrl+"/"+reportParId,parscore);
  }
  public getParAppraiserReportsByParId(parId) {
    return this.http.get<ReportParAppraiserGet[]>(this.reportParApprasiseeUrl+"/"+parId);
  }
}

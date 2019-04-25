import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HrViewSalaryDetails } from '../Model/hr-view-salary-details';

@Injectable({
  providedIn: 'root'
})
export class HrViewSalaryDetailsService {
  private hrViewSalaryDetailsUrl = "http://localhost:8080/hrm_system/salarydetailsHRview";

  constructor(private http: HttpClient) { }

  public getHrViewSalaryDetails(): Observable<HrViewSalaryDetails[]> {
    return this.http.get<HrViewSalaryDetails[]>(this.hrViewSalaryDetailsUrl);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HrViewSalaryDetails } from '../Model/hr-view-salary-details';

@Injectable({
  providedIn: 'root'
})
export class EmpViewsalaryDetailsService {

  private empViewSalaryDetailsUrl = "http://localhost:8080/hrm_system/salarydetailsempview";
  constructor(private http: HttpClient) { }

  public getempViewSalaryDetails(username): Observable<HrViewSalaryDetails[]> {
    return this.http.get<HrViewSalaryDetails[]>(this.empViewSalaryDetailsUrl+"/"+username);
  }

}

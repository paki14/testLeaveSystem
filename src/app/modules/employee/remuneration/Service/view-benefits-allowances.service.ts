import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViewBenefitsAllowances } from '../Model/view-benefits-allowances';
import { LoginCredential } from '../Model/login-credential';

@Injectable({
  providedIn: 'root'
})
export class ViewBenefitsAllowancesService {

  private benefitsAllowancesUrl='http://localhost:8080/hrm_system/benefits';
  private loginUserUrl='http://localhost:8010/api/auth';

  constructor(private http:HttpClient) { }

  public getBenefitsAllowances():Observable<ViewBenefitsAllowances[]>{
    return this.http.get<ViewBenefitsAllowances[]>(this.benefitsAllowancesUrl);
  }
  public getBenefitsAllowancesSearchByName(name): Observable<ViewBenefitsAllowances[]>{
    return this.http.get<ViewBenefitsAllowances[]>(this.benefitsAllowancesUrl+"/search?name="+name);  
  }
  public getBenefitsAllowancesByName(name): Observable<ViewBenefitsAllowances>{
    return this.http.get<ViewBenefitsAllowances>(this.benefitsAllowancesUrl+"/"+name);  
  }

  public getSalaryChartEmployeeById(id): Observable<ViewBenefitsAllowances> {
    return this.http.get<ViewBenefitsAllowances>(this.benefitsAllowancesUrl+"/"+id);  
  }

  public getUserIdByName(name){
  return this.http.get<LoginCredential>(this.loginUserUrl+"/"+name);
  }
}

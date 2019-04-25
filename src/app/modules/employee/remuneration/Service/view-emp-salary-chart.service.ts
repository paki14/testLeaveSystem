import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ViewEmpSalaryChart} from '../Model/view-emp-salary-chart';
import { Observable } from 'rxjs';
import { LoginCredential } from '../Model/login-credential';

@Injectable({
  providedIn: 'root'
})
export class ViewEmpSalaryChartService {

 salaryChart =new  ViewEmpSalaryChart();

  private salaryChartUrl='http://localhost:8080/hrm_system/salarychart';
  private loginUserUrl='http://localhost:8010/api/auth';
  constructor(private http: HttpClient ){}

  public getSalaryChart(): Observable<ViewEmpSalaryChart[]>{
    return this.http.get<ViewEmpSalaryChart[]>(this.salaryChartUrl);  
  }

  public getHrSalaryChartByName(name): Observable<ViewEmpSalaryChart[]>{
    return this.http.get<ViewEmpSalaryChart[]>(this.salaryChartUrl+"/search?name="+name);  
  }
  public getSalaryChartByName(name): Observable<ViewEmpSalaryChart>{
    return this.http.get<ViewEmpSalaryChart>(this.salaryChartUrl+"/"+name);  
  }

  public getSalaryChartEmployeeById(id): Observable<ViewEmpSalaryChart> {
    return this.http.get<ViewEmpSalaryChart>(this.salaryChartUrl+"/"+id);  
  }

  public getUserIdByName(name){
  return this.http.get<LoginCredential>(this.loginUserUrl+"/"+name);
  }
}

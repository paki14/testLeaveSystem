import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CareerDevPlan } from '../Model/career-dev-plan';
import { LoginCredential } from 'src/app/modules/employee/remuneration/Model/login-credential';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmpViewCareerPlanService {

  constructor(private httpObj: HttpClient) { }
  private careerDevPlanUrl = "http://localhost:8080/hrm_system/usercareerdevelopmentplanself";
  private careerDevPlanUrlPost = "http://localhost:8080/hrm_system/usercareerdevelopmentplanselfsave";
  private loginUserUrl = 'http://localhost:8010/api/auth';


  public getCareerDevPlan() {
    return this.httpObj.get<CareerDevPlan[]>(this.careerDevPlanUrl);
  }

  public getCareerDevPlanByUserId(id) {
    return this.httpObj.get<CareerDevPlan[]>(this.careerDevPlanUrl + "/" + id);

  }
  public createcareerDevPlan(careerDevPlan) {
    return this.httpObj.post<CareerDevPlan>(this.careerDevPlanUrlPost, careerDevPlan);

  }
  public updatecareerDevPlan(careerDevPlan) {
    return this.httpObj.put<CareerDevPlan>(this.careerDevPlanUrl + "/" + careerDevPlan.id, careerDevPlan);
  }

  public deletecareerDevPlan(careerDevPlan) {
    return this.httpObj.delete<CareerDevPlan>(this.careerDevPlanUrl + "/" + careerDevPlan.id, careerDevPlan);
  }

  public getUserIdByName(name) {
    return this.httpObj.get<LoginCredential>(this.loginUserUrl + "/" + name);
  }
}



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestPromotion } from '../models/request-promotion';
import { Department } from '../models/department';
import { Designation } from '../models/designation';
import { LoginCredential } from '../../../remuneration/Model/login-credential';

@Injectable({
  providedIn: 'root'
})
export class RequestPromotionService {
  constructor(private httpObj: HttpClient) { }

  private RequestPromotiontUrl = 'http://localhost:8080/hrm_system/requestpromotion';
  private depUrl = 'http://localhost:8080/hrm_system/department';
  private desigUrl = 'http://localhost:8080/hrm_system/designation';
  private reqproUrl = 'http://localhost:8080/hrm_system/requestpromotionsave';
  private loginUserUrl = 'http://localhost:8010/api/auth'; 


  public getAllPromotionRequest() {
    return this.httpObj.get<RequestPromotion[]>(this.RequestPromotiontUrl);
  }

  public getPromotionRequestById(id) {
    return this.httpObj.get<RequestPromotion[]>(this.RequestPromotiontUrl + "/id/" + id);
  }
  public postPromotionRequest(reqpro) {
    return this.httpObj.post<RequestPromotion>(this.reqproUrl, reqpro);
  }

  public deletePromotionRequest(reqpro) {
    return this.httpObj.delete<RequestPromotion>(this.RequestPromotiontUrl + '/' + reqpro.id);
  }
  public updatePromotionRequest(reqpro) {
    return this.httpObj.put<RequestPromotion>(this.RequestPromotiontUrl + '/' + reqpro.id, reqpro);
  }
  public getAllDepartment() {
    return this.httpObj.get<Department[]>(this.depUrl);
  }
  public getAllDesignation() {
    return this.httpObj.get<Designation[]>(this.desigUrl);
  }

  public getUserIdByLoginName(id){
    return this.httpObj.get<LoginCredential>(this.loginUserUrl+"/"+id);
  }
  public getPromotionRequestByUserId(id) {
    return this.httpObj.get<RequestPromotion[]>(this.RequestPromotiontUrl + "/" +  id);
  }
}
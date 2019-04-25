import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AddDeniedPromotion } from '../models/add-denied-promotion';
import { LoginCredential } from '../../../remuneration/Model/login-credential';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
@Injectable({
  providedIn: 'root'
})


export class AddDeniedPromotionService {
  constructor(private httpObj:HttpClient) { }
  private DeniedPromotionUrl="http://localhost:8080/hrm_system/denied";
  private loginUserUrl = 'http://localhost:8010/api/auth';
  private denProUserByUrl='http://localhost:8080/hrm_system/denied/deniedpromotionUser';

  getAllDeniedPromotion(){
    return this.httpObj.get<AddDeniedPromotion[]>(this.DeniedPromotionUrl);
  }

  createDeniedPromotion(data){
    return this.httpObj.post<AddDeniedPromotion[]>(this.DeniedPromotionUrl, data);
  }

  updateDeniedPromotion(data){
    return this.httpObj.put<AddDeniedPromotion[]>(this.DeniedPromotionUrl + "/"+ data.id,data);
  }

  deleteDeniedPromotion(data){
    return this.httpObj.delete<AddDeniedPromotion>(this.DeniedPromotionUrl + "/" + data.id);
  }
  public getUserIdByLoginName(id){
    return this.httpObj.get<LoginCredential>(this.loginUserUrl+"/"+id);
  }
  public getDeniedPromotionByUserId(id) {
    return this.httpObj.get<AddDeniedPromotion[]>(this.denProUserByUrl + "/" +  id);
  }

}
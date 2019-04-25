import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AddPromotion } from '../models/add-promotion';
import { Designation } from '../models/designation';
import { LoginCredential } from '../../../remuneration/Model/login-credential';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AddPromotionService {

  constructor(private httpObj: HttpClient) { }
  baseUrl = "http://localhost:8080/hrm_system/addpromotion";
  private desigUrl='http://localhost:8080/hrm_system/designation';
  private proUrl='http://localhost:8080/hrm_system/promotionsave';
  private loginUserUrl = 'http://localhost:8010/api/auth';
  private proByUserUrl='http://localhost:8080/hrm_system/promotionByUser';

  public getAddPromotion() {
    return this.httpObj.get<AddPromotion[]>("http://localhost:8080/hrm_system/getpromotion");

  }
  public createAddPromotion(addPromotion) {
    return this.httpObj.post<AddPromotion>(this.proUrl, addPromotion);
  }

  public editPromotion(editPromotion) {
    return this.httpObj.put<AddPromotion>("http://localhost:8080/hrm_system/editpromotion" + "/" + editPromotion.id, editPromotion);

  }
 
  public getAllDesignation() {
    return this.httpObj.get<Designation[]>(this.desigUrl);
  }
  deletePromotion(delpro){
    return this.httpObj.delete<AddPromotion>("http://localhost:8080/hrm_system/deletepromotion"+"/"+delpro.id,delpro)
  }

  public getUserIdByLoginName(id){
    return this.httpObj.get<LoginCredential>(this.loginUserUrl+"/"+id);
  }
  public getPromotionByUserId(id) {
    return this.httpObj.get<AddPromotion[]>(this.proByUserUrl + "/" +  id);
  }
}

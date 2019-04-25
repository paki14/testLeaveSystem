import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { IndividualWelfare } from '../Model/individual-welfare';

@Injectable({
  providedIn: 'root'
})
export class IndividualWelfareService {

  constructor( private httpObj:HttpClient) { }
  private individualWelfareUrl='http://localhost:8080/hrm_system/individualWelfare';

  getAllIndividualWelfare(){
    return this.httpObj.get<IndividualWelfare[]>(this.individualWelfareUrl);
  }

  createIndividualWelfare(data){
    return this.httpObj.post<IndividualWelfare>(this.individualWelfareUrl,data);
  }

  deleteIndividualWelfare(IndividualWelfare){
    return this.httpObj.delete<IndividualWelfare>(this.individualWelfareUrl+"/"+IndividualWelfare.id,IndividualWelfare);
  }

  updateIndividualWelfare(IndividualWelfare){
    return this.httpObj.put<IndividualWelfare>(this.individualWelfareUrl+"/"+IndividualWelfare.id,IndividualWelfare);
  }


}

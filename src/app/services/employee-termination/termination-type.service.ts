import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TerminationType } from 'src/app/models/employee-termination/termination-type';
import { TerminationRecord } from 'src/app/models/employee-termination/termination-record';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class TerminationTypeService {

  constructor(private httpObj: HttpClient) { }

  public getTerminationType(){
    return this.httpObj.get<TerminationType[]>("http://localhost:8080/hrm_system/terminationType");
  }

  public createTerminationType(terminationType){
    return this.httpObj.post<TerminationType>("http://localhost:8080/hrm_system/terminationType",terminationType);
  }
}

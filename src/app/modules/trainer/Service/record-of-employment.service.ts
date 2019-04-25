import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RecordOfEmployment } from '../Model/record-of-employment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class RecordOfEmploymentService {

  constructor(private httpObj:HttpClient) { }
  private recordOfEmploymenturl = "http://localhost:8020/hrm_system/recordOfEmployment";

  public getRecordOfEmployment(){
    return this.httpObj.get<RecordOfEmployment[]>(this.recordOfEmploymenturl);
  }
  public createRecordOfEmployment(recordOfEmployment:RecordOfEmployment){
    return this.httpObj.post<RecordOfEmployment>(this.recordOfEmploymenturl,recordOfEmployment);
  }
}

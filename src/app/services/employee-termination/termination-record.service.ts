import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TerminationRecord } from 'src/app/models/employee-termination/termination-record';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class TerminationRecordService {

  constructor(private httpObj: HttpClient) { }
  private terminationRecordUrl = "http://localhost:8080/hrm_system/terminationRecord"

  public getTerminationRecord(){
    return this.httpObj.get<TerminationRecord[]>(this.terminationRecordUrl);
  }

  public createTerminationRecord(terminationRecord){
    return this.httpObj.post<TerminationRecord>(this.terminationRecordUrl,terminationRecord);
  }
}

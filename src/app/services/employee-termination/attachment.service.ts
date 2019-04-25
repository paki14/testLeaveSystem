import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Attachment } from 'src/app/models/employee-termination/attachment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AttachmentService {

  constructor(private httpObj: HttpClient) { }

  public getAttachment(){
    return this.httpObj.get<Attachment[]>("http://localhost:8080/hrm_system/attachment");
  }

  public createAttachment(attachment){
    return this.httpObj.post<Attachment>("http://localhost:8080/hrm_system/attachment",attachment);
  }
}

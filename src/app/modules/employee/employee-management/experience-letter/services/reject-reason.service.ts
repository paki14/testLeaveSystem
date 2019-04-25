import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { RejectReason } from '../modals/reject-reason.modal';

const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class RejectReasonService {

  constructor(private http:HttpClient) { }
  private rejectReasonUrl= "http://localhost:8080/reject-reason";


  public createRejectReason(rejectReason){
    return this.http.post<RejectReason>(this.rejectReasonUrl,rejectReason);
  }

}

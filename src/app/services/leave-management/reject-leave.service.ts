import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RejectLeave } from 'src/app/models/leave-management/reject-leave';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RejectLeaveService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8050/hrm_system/reject";

  public getAllRejectedLeave() {
    return this.http.get<RejectLeave[]>(this.baseUrl)
  }
}

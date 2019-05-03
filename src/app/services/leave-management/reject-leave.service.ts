import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RejectLeave } from 'src/app/models/leave-management/reject-leave';
import { RejectCancelRequest } from 'src/app/models/leave-management/reject-cancel-request';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RejectLeaveService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8050/hrm_system/reject";
  private rejectUrl="http://localhost:8050/hrm_system/rejectCancel/leaverequest"

  public getAllRejectedLeave() {
    return this.http.get<RejectLeave[]>(this.baseUrl)
  }
  public getRejectCancelRequest(leaveRequestId){
    return this.http.get<RejectCancelRequest>(this.rejectUrl+"/"+leaveRequestId)
  }
}

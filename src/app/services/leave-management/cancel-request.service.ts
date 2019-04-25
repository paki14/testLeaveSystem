import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cancel } from 'src/app/models/leave-management/cancel';
import { AcceptCancelRequest } from 'src/app/models/leave-management/accept-cancel-request';
import { RejectCancelRequest } from 'src/app/models/leave-management/reject-cancel-request';

@Injectable({
  providedIn: 'root'
})
export class CancelRequestService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8050/hrm_system/cancel';

  public cancelRequest(cancelRequest) {
    return this.http.post<Cancel>(this.baseUrl, cancelRequest);
  }

  public acceptCancelRequest(acceptCancelRequest){
    return this.http.post<AcceptCancelRequest>(this.baseUrl+'/accept',acceptCancelRequest);
  }

  public rejectCancelRequest(rejectCancelRequest){
    return this.http.post<RejectCancelRequest>(this.baseUrl+'/reject',rejectCancelRequest);
  }

  public getAllCancelLeaveRequest(){
    return this.http.get<Cancel[]>(this.baseUrl);
  }

  public getPendingCancelLeaveRequest(){
    return this.http.get<Cancel[]>(this.baseUrl+'/pending');
  }
  
}

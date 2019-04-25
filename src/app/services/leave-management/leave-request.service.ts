import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LeaveRequest } from 'src/app/models/leave-management/leave-request';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {

  constructor(private http:HttpClient) { }

  private baseUrl = "http://localhost:8050/hrm_system/leaverequest";


  public getAllLeaveRequest(){
    return this.http.get<LeaveRequest[]>(this.baseUrl)
  }

  public addLeaveRequest(leaveRequest){
    return this.http.post<LeaveRequest>(this.baseUrl+'/'+ leaveRequest.userName,leaveRequest)
  }

  public getAllLeaveRequestByUser(userId){
    return this.http.get<LeaveRequest[]>(this.baseUrl+"/user/"+userId)
  }

  public getPendingLeaveRequest(){
    return this.http.get<LeaveRequest[]>(this.baseUrl+"/pending")
  }

  public acceptLeaveRequest(accept){
    return this.http.post<LeaveRequest>(this.baseUrl+"/accept",accept)
  }

  public rejectLeaveRequest(reject){
    return this.http.post<LeaveRequest>(this.baseUrl+"/reject",reject)
  }

  public getAllLeaveRequestByUserName(userName){
    return this.http.get<LeaveRequest[]>(this.baseUrl+"/"+userName)
  }

  public deleteLeaveRequest(leaveRequestId){
    return this.http.delete<LeaveRequest>(this.baseUrl+"/"+leaveRequestId)
  }
}

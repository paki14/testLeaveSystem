import { LeaveAllocation } from './../../models/leave-management/leave-allocation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LeaveAllocationService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8050/hrm_system/leaveallocation";

  public getAllLeaveAllocationByUser(user) {
    return this.http.get<LeaveAllocation[]>(this.baseUrl + "/" + user)
  }
  public getCarryForwardAnualLeave(user) {
    return this.http.get<LeaveAllocation>(this.baseUrl + "/annual/" + user);
  }
}

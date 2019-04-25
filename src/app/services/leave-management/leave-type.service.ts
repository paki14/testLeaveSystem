import { LeaveType } from './../../models/leave-management/leave-type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaveTypeService {

  constructor(private http:HttpClient) { }

  private baseUrl = "http://localhost:8050/hrm_system/leavetype";

  public getAllLeaveTypes(){
    return this.http.get<LeaveType[]>(this.baseUrl)
  }
}

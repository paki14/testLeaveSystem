import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CarryforwardLeaveRequest, RejectCarryforwardData, CarryforwardRequestData } from 'src/app/models/leave-management/carryforward-leave-request';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CarryforwardLeaveRequestService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8050/hrm_system/carryforwardrequest";

  public addCarryforwardLeaveRequest(carryforwardrequest) {
    return this.http.post<CarryforwardLeaveRequest>(this.baseUrl, carryforwardrequest);
  }

  public getCarryforwardLeaveRequest() {
    return this.http.get<CarryforwardRequestData[]>(this.baseUrl);
  }

  public getPendingCarryforwardLeaveRequest() {
    return this.http.get<CarryforwardRequestData[]>(this.baseUrl+"/pending");
  }

  public getCarryforwardLeaveRequestByUser(username) {
    return this.http.get<CarryforwardRequestData>(this.baseUrl + "/" + username);
  }
  //by Mayu
  public acceptCarryforwardRequest(username, carryforwardrequest) {
    return this.http.post<CarryforwardRequestData>(this.baseUrl + "/accept/" + username, carryforwardrequest);
  }

  public rejectCarryforwardRequest(username, rejectCarryforwardrequest) {
    return this.http.post<RejectCarryforwardData>(this.baseUrl + "/reject/" + username, rejectCarryforwardrequest);
  }
}

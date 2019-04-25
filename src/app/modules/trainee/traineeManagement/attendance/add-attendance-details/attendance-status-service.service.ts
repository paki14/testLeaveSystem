import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AttendanceStatus } from './attendance-status';

const httpOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class AttendanceStatusServiceService {

  constructor(private httpObj:HttpClient) { }
  private attendStatusUrl = "http://localhost:8101/hrm_system/attendence/status";

  getAttendStatus(){
    return this.httpObj.get<AttendanceStatus[]>(this.attendStatusUrl);
  }
  addAttendStatus(data){
    return this.httpObj.post<AttendanceStatus>(this.attendStatusUrl,data)
  }
}

import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AttendanceType } from './attendance-type';
const httpOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class AttendancetypeService {

  constructor(private httpObj:HttpClient) { }
  private attendTypeUrl = "http://localhost:8101/hrm_system/attendence/type";

  getAttendType(){
    return this.httpObj.get<AttendanceType[]>(this.attendTypeUrl);
  }
  addAttendType(data){
    return this.httpObj.post<AttendanceType>(this.attendTypeUrl,data)
  }
}

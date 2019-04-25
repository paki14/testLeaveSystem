import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AttendanceDetails } from './attendance-details';
const httpOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class AttendanceDetailsService {

  constructor(private httpObj:HttpClient) { }
  private attendDetailUrl = "http://localhost:8101/hrm_system/attedenceDetails";

  getAttendDetails(){
    return this.httpObj.get<AttendanceDetails[]>(this.attendDetailUrl);
  }
  addAttendDetails(data){
    return this.httpObj.post<AttendanceDetails>(this.attendDetailUrl,data)
  }
  getAttendanceDetailByTrainee(trainee){
    return this.httpObj.get<AttendanceDetails[]>(this.attendDetailUrl+"/"+trainee)
  }
}

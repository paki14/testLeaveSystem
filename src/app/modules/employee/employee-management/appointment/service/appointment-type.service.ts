import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AppointmentType } from '../models/appointment-type.model';

const HttpOptions ={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AppointmentTypeService {

  constructor(private http:HttpClient) { }
  private appointmentTypeUrl='http://localhost:8100/hrm_system/appointmentType';

  getAppointmentType(){
    return this.http.get<AppointmentType[]>(this.appointmentTypeUrl);
  }

}

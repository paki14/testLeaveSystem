import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppoinmentDetailsService {

  constructor(private http:HttpClient) { }
  private appointUrl='http://localhost:8100/hrm_system/appointment';

  public AddAppointmentDetails(appointmentObj){
    return this.http.post<Appointment>(this.appointUrl,appointmentObj);
  }

  public viewAppointmentDetails(){
    return this.http.get<Appointment[]>(this.appointUrl)
  }

}

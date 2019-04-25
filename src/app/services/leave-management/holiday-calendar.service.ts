import { Holiday } from './../../models/leave-management/holiday';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class HolidayCalendarService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8050/hrm_system/holidaycalendar";

  public getAllHoliday() {
    return this.http.get<any>(this.baseUrl)
  }

  public addEvent(event) {
    return this.http.post<Holiday>(this.baseUrl,event)
  }

  public updateEvent(id, event){
    return this.http.put<Holiday>(this.baseUrl+'/'+id, event)
  }
}

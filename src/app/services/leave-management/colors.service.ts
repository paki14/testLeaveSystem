import { Colors } from './../../models/leave-management/holiday';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8050/hrm_system/colors";

  public getAllColors() {
    return this.http.get<Colors[]>(this.baseUrl)
  }
}

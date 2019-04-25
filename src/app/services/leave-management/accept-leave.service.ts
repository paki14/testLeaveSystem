import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AcceptLeaveService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8050/hrm_system/accept";

  public getAllAcceptData() {
    return this.http.get<any>(this.baseUrl)
  }
}

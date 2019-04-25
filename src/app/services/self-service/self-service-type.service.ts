import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SelfServiceType } from 'src/app/models/self-service/self-service-type';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class SelfServiceTypeService {

  constructor(private http: HttpClient) { }
  private selfServiceTypeUrl = "http://localhost:8080/hrm_system/selfservicetype";

  public getAllSelfServiceType() {
    return this.http.get<SelfServiceType[]>(this.selfServiceTypeUrl);
  }

  public createSelfServiceType(selfServiceType: SelfServiceType) {
    return this.http.post<SelfServiceType>(this.selfServiceTypeUrl, selfServiceType);
  }

  public updateSelfServiceType(selfServiceType) {
    return this.http.put<SelfServiceType>(this.selfServiceTypeUrl + "/" + selfServiceType.id, selfServiceType);
  }

  public deleteSelfServiceType(selfServiceType) {
    return this.http.delete<SelfServiceType>(this.selfServiceTypeUrl + "/" + selfServiceType.id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParConfig } from '../models/par-config.model';

@Injectable({
  providedIn: 'root'
})
export class ParconfigService {

  constructor(private http: HttpClient) {}

  private parConfigUrl = 'http://localhost:8081/hrm_system/parcontent';

  public getParConfig() {
    return this.http.get<ParConfig[]>(this.parConfigUrl);
  }

  public deleteParConfig(parConfig) {
    return this.http.delete<ParConfig>(this.parConfigUrl + '/' + parConfig.id, parConfig);
  }

  public addParConfig(parConfig) {
    return this.http.post<ParConfig>(this.parConfigUrl, parConfig);
  }

  public updateParConfig(parConfig) {
    return this.http.put<ParConfig>(this.parConfigUrl + '/' + parConfig.id,parConfig);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from 'src/app/models/self-service/department';
import { Observable } from 'rxjs';
import { SelfServiceUser } from 'src/app/models/self-service/self-service-user';
import { SelfService } from 'src/app/models/self-service/self-service';

@Injectable({
  providedIn: 'root'
})
export class SelfServiceService {

  private selfServiceAPI = "http://localhost:8080/hrm_system/selfservice";
  private selfServiceAP = "http://localhost:8080/hrm_system/selfservices";
  //URL to get department
  private departmentAPI = "http://localhost:8080/hrm_system/department";

  constructor(private http: HttpClient) { }

public getSpecificDetails(username){
  return this.http.get<SelfService[]>(this.selfServiceAP+"/"+username);
}

  public getDepartments(){
    return this.http.get<Department[]>(this.departmentAPI)
  }
  public getSelfService():Observable<SelfServiceUser[]>{
    return this.http.get<SelfServiceUser[]>(this.selfServiceAPI)
  }

  public getAllSelfService():Observable<SelfService[]>{
    return this.http.get<SelfService[]>(this.selfServiceAPI)
  }

  public createComplain(selfService: SelfService){
    return this.http.post<SelfService>(this.selfServiceAPI, selfService)
  }

  public getSelfServiceByUser(userId: number){
    return this.http.get<SelfService[]>(this.selfServiceAPI + "/" + userId)
  }
  public updateSelfServiceByUser(selfService) {
    return this.http.put<SelfService>(this.selfServiceAPI + "/" + selfService.id, selfService);
  }

  public getSelfServiceByPendingStatus(){
    return this.http.get<SelfService[]>(this.selfServiceAPI + "/status/Pending");
  }
  
}

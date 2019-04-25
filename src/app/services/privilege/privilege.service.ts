import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Privilege } from 'src/app/models/privilege/privilege';
import { StateUpdate } from 'src/app/models/privilege/state-update';

const params=new HttpParams()
@Injectable({
  providedIn: 'root'
})
export class PrivilegeService {

  constructor(private http: HttpClient) { }

  private privilegeAPI = "http://localhost:8080/hrm_system/privilege";
  private privilegeAPISearch = "http://localhost:8080/hrm_system/privilege/search?";

  getAllPrivileges() {
    return this.http.get<Privilege[]>(this.privilegeAPI);
  }

  updateState(stateUpdate){
    return this.http.post<StateUpdate>(this.privilegeAPI+"/update", stateUpdate);
  }

  getState(privilegeData){
    return this.http.post<boolean>(this.privilegeAPI+"/state", privilegeData);
  }

  getPrivilege(authorizeTypeName,moduleName,roleName) {
    return this.http.get<StateUpdate>(this.privilegeAPISearch+'authorizeTypeName='+authorizeTypeName+'&moduleName='+moduleName+'&roleName='+roleName,{params})
  }
}

import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RolesAndResponsibilities } from './roles-and-responsibilities';
const httpOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class RolesAndResponsibilitiesService {

  constructor(private httpObj:HttpClient) { }
  private roleurl = "http://localhost:8100/hrm_system/rolesandresponsibilities";

  getAllRolesandResponsibilities(){
    return this.httpObj.get<RolesAndResponsibilities[]>(this.roleurl);
  }
  getRolesandResponsibilitiesByuserId(uid){
    return this.httpObj.get<RolesAndResponsibilities[]>(this.roleurl+"/"+uid);
  }
  addrolesAndResponsibilities(data){
    return this.httpObj.post<RolesAndResponsibilities>(this.roleurl,data);
  }
  editaRolesAndResponsibilities(roleObj){
    return this.httpObj.put<RolesAndResponsibilities>(this.roleurl+"/edit/"+roleObj.id,roleObj);
  }
  deleteRolesAndResponsibilities(data){
    return this.httpObj.delete<RolesAndResponsibilities>(this.roleurl+"/"+data.id);
  }
}

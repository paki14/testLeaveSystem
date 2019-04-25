import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Profile } from './profile.model';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Department } from '../../add-profile-info/add-general-information/department.model';
import { Role } from '../../add-profile-info/add-general-information/role.model';



const httpOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProfileInfoService {

  constructor(private httpObj:HttpClient) { }
  private prourl = "http://localhost:8100/hrm_system/user";
  private depturl="http://localhost:8100/hrm_system/department";
  private roleurl="http://localhost:8100/hrm_system/roles";
  public getGenerelInfo(){
    return this.httpObj.get<Profile[]>(this.prourl);
  }
  public addGeneralInfo(data){
    return this.httpObj.post<Profile>(this.prourl,data);
  }
  
  // start userId pass in these code
  private profileuserObservable = new BehaviorSubject<Number>(null);
  profileuserObservable$ = this.profileuserObservable.asObservable();

  
  useSelectedUserId(userId: number){
    this.profileuserObservable.next(userId);
  }
  getDepartments(){
    return this.httpObj.get<Department[]>(this.depturl)
  }
  getRoles(){
    return this.httpObj.get<Role[]>(this.roleurl)
  }
   // end userId pass in these code
  public getUserById(id){
    return this.httpObj.get<Profile[]>(this.prourl+"/"+id);
  }
  public getUserListById(data){
    return this.httpObj.get<Profile>(this.prourl+"/"+data.id);
  }
  public getUserListByname(data){
    return this.httpObj.get<Profile[]>(this.prourl+"get"+"/"+data);
  }
}

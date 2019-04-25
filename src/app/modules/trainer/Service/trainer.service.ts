// import { Injectable } from '@angular/core';
// import { HttpHeaders, HttpClient } from '@angular/common/http';
// import { Trainer } from '../Model/trainer';
// import { Profile } from 'selenium-webdriver/firefox';
// import { BehaviorSubject } from 'rxjs';
// import { Department } from '../../trainee/traineeManagement/profile/add-profile-info/add-general-information/department.model';
// import { Role } from '../../trainee/traineeManagement/profile/add-profile-info/add-general-information/role.model';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class TrainerService {
//   getGenerelInformation(): any {
//     throw new Error("Method not implemented.");
//   }

//   constructor(private httpObj:HttpClient) { }
//   private prourl = "http://localhost:8101/hrm_system/trainer";
//   private depturl="http://localhost:8101/hrm_system/department";
//   private roleurl="http://localhost:8101/hrm_system/roles";
//   public getGenerelInformation(){
//     return this.httpObj.get<Profile[]>(this.prourl);
//   }
//   public addGeneralInformation(data){
//     return this.httpObj.post<Profile>(this.prourl,data);
//   }
  
//   // start userId pass in these code
//   private profileuserObservable = new BehaviorSubject<Number>(null);
//   profileuserObservable$ = this.profileuserObservable.asObservable();

  
//   useSelectedUserId(userId: number){
//     this.profileuserObservable.next(userId);
//   }
//   getDepartments(){
//     return this.httpObj.get<Department[]>(this.depturl)
//   }
//   getRoles(){
//     return this.httpObj.get<Role[]>(this.roleurl)
//   }
//    // end userId pass in these code
//   public getUserById(id){
//     return this.httpObj.get<Profile[]>(this.prourl+"/"+id);
//   }
//   public getUserListById(data){
//     return this.httpObj.get<Profile>(this.prourl+"/"+data.id);
//   }
//   public getUserListByname(data){
//     return this.httpObj.get<Profile[]>(this.prourl+"get"+"/"+data);
//   }

//   public getEmpTrainee(){
//     return this.httpObj.get<Profile[]>(this.prourl+"/"+"Employee")
//   }
// }


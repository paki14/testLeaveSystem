// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ProfileTrainerComponent } from './profile-trainer/profile-trainer.component';
// import { TrainerProfileTableComponent } from './trainer-profile-table/trainer-profile-table.component';
// import { ViewGeneralInformationComponent } from './view-general-information/view-general-information.component';
// import { ViewTechnologySkillLevelComponent } from './view-technology-skill-level/view-technology-skill-level.component';
// import { ViewRecordOfEmploymentComponent } from './view-record-of-employment/view-record-of-employment.component';
// import { HttpClient } from 'selenium-webdriver/http';
// import { Profile } from 'selenium-webdriver/firefox';
// import { BehaviorSubject } from 'rxjs';

// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: [ProfileTrainerComponent, TrainerProfileTableComponent, ViewGeneralInformationComponent,, ViewTechnologySkillLevelComponent, ViewRecordOfEmploymentComponent]
// })
// export class ViewProfileInfoModule {

//   getGenerelInformation(): any {
//     throw new Error("Method not implemented.");
//   }

//   constructor(private httpObj:HttpClient) { }
//   private prourl = "http://localhost:8101/hrm_system/trainer";
//   private depturl="http://localhost:8101/hrm_system/department";
//   private roleurl="http://localhost:8101/hrm_system/roles";
//   public getGenerelInfo(){
//     return this.httpObj.get<Profile[]>(this.prourl);
//   }
//   public addGeneralInfo(data){
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
//    end userId pass in these code
//   public getUserById(id){
//     return this.httpObj.get<Profile[]>(this.prourl+"/"+id);
//   }
//   public getUserListById(data){
//     return this.httpObj.get<Profile>(this.prourl+"/"+data.id);
//   }
//   public getUserListByname(data){
//     return this.httpObj.get<Profile[]>(this.prourl+"get"+"/"+data);
//   }

//   public getEmpTrainer(){
//     return this.httpObj.get<Profile[]>(this.prourl+"/"+"Employee")
//   }
// }


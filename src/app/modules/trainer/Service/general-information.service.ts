// import { Injectable } from '@angular/core';
// import { HttpHeaders, HttpClient } from '@angular/common/http';
// import { GeneralInformation } from '../Model/general-information';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class GeneralInformationService {
//   constructor(private httpObj:HttpClient) { }
//   private generalInformationurl = "http://localhost:8020/hrm_system/generalInformation";

//   public getGenerelInformation(){
//     return this.httpObj.get<GeneralInformation[]>(this.generalInformationurl);
//   }
//   public createGeneralInformation(data){
//     return this.httpObj.post<GeneralInformation>(this.generalInformationurl,data);
//   }
// }

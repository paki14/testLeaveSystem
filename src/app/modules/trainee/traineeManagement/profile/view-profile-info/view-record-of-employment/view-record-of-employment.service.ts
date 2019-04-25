import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ViewRecordOfEmployment } from './view-record-of-employment.model';


const httpOption={
  headers:new HttpHeaders({'content-Type':'application/jsonm'})
};

@Injectable({
  providedIn: 'root'
})
export class ViewRecordOfEmploymentService {

  constructor(private http:HttpClient) { }
  private recordOfempUrl="http://localhost:8101/hrm_system/workexperience";
  getAllRecordOfEmp(){
    return this.http.get<ViewRecordOfEmployment[]>(this.recordOfempUrl);
  }
  getAllRecordOfEmpByUserId(uid){
    return this.http.get<ViewRecordOfEmployment[]>(this.recordOfempUrl+"/"+uid);
  }
  addRecordOfEmployement(data){
    return this.http.post<ViewRecordOfEmployment>(this.recordOfempUrl,data)
  }
  editRecordOfEmployement(data){
    return this.http.put<ViewRecordOfEmployment>(this.recordOfempUrl+"/"+data.id,data)
  }
  deleteRecordOfEmployement(data){
    return this.http.delete<ViewRecordOfEmployment>(this.recordOfempUrl+"/"+data.id)
  }
}

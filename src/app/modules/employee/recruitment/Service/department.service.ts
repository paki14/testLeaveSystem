import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Department } from '../Modal/department';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpObj:HttpClient) { }
  departmentUrl="http://localhost:8080/hrm_system/department";

  getAllDepartment(){
    return this.httpObj.get<Department[]>(this.departmentUrl);
  }
  
  createDepartment(departmentdata){
    return this.httpObj.post<Department>(this.departmentUrl,departmentdata);
  }

  deleteDepartment(departmentdata){
    return this.httpObj.delete<Department>(this.departmentUrl+"/"+departmentdata.id,departmentdata)
  }
  
  updateDepartment(departmentdata){
    return this.httpObj.put<Department>(this.departmentUrl+"/"+departmentdata.id,departmentdata)
  }
}

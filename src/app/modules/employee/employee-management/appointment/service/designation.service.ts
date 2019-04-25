import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Designation } from '../models/designation.model';
const HttpOptions ={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  constructor(private http:HttpClient) { }
  private designationUrl='http://localhost:8100/hrm_system/designation';

  getDesignation(){
    return this.http.get<Designation[]>(this.designationUrl);
  }

}

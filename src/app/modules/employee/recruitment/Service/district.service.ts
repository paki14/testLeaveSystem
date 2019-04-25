import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { District } from '../Modal/district';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DistrictService {

 
  constructor(private httpObj:HttpClient) { }
  districttUrl="http://localhost:8080/hrm_system/district";

  getAllDistrict(){
    return this.httpObj.get<District[]>(this.districttUrl);
  }
  
  createDistrict(districtdata){
    return this.httpObj.post<District>(this.districttUrl,districtdata);
  }

  deleteDistrict(districtdata){
    return this.httpObj.delete<District>(this.districttUrl+"/"+districtdata.id,districtdata)
  }
  
  updateDistrict(districtdata){
    return this.httpObj.put<District>(this.districttUrl+"/"+districtdata.id,districtdata)
  }
}

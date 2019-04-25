import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Availability } from '../Model/availability';



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {

  
  constructor(private httpObj:HttpClient) { }
  private AvailabilityUrl="http://localhost:8020/hrm_system/available";
  

  getAllAvailability(){
    return this.httpObj.get<Availability[]>(this.AvailabilityUrl);
  }

  createAvailability(data){
    return this.httpObj.post<Availability>(this.AvailabilityUrl,data);
  }

  deleteAvailability(availability){
    return this.httpObj.delete<Availability>(this.AvailabilityUrl+"/"+availability.id,availability);
  }

  updateAvailability(availability){
    return this.httpObj.put<Availability>(this.AvailabilityUrl+"/"+availability.id,availability);
  }

   

 
 

}
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Location } from '../models/location.model';

const HttpOptions ={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http:HttpClient) { }
  private locationUrl='http://localhost:8100/hrm_system/location';

  getAllLocation(){
    return this.http.get<Location[]>(this.locationUrl);
  }
}

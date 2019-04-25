import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Job } from '../../../recruitment/Modal/job';
import { BehaviorSubject } from 'rxjs';
const HttpOptions ={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }
  private jobUrl='http://localhost:8100/hrm_system/job';

  private jobObservable = new BehaviorSubject<Number>(null);
  jobObservable$ = this.jobObservable.asObservable();

  getAllJob(){
    return this.http.get<Job[]>(this.jobUrl);
  }
}

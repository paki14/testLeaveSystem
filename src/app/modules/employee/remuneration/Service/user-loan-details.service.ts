import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserLoanDetails } from '../Model/user-loan-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoanDetailsService {

  private userLoanDetailsUrl = 'http://localhost:8080/hrm_system/userloandetails';
  

  constructor( private http: HttpClient) { }

  public getUserLoanDetails(): Observable<UserLoanDetails[]>{
    return this.http.get<UserLoanDetails[]>(this.userLoanDetailsUrl);
  }

  public getUserLoanDetailsByUserName(name):Observable<UserLoanDetails[]>{
    return this.http.get<UserLoanDetails[]>(this.userLoanDetailsUrl+"/search?name="+name);
  }
}

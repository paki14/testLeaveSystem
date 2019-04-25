import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { LoanDetails } from '../Model/loan-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoanDetailsService {

  private loanDetailsUrl = 'http://localhost:8080/hrm_system/loandetails';
  constructor(private http: HttpClient ) { }

  public getLoanDetails(): Observable<LoanDetails[]>{
    return this.http.get<LoanDetails[]>(this.loanDetailsUrl);
  }
}

import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ExamType } from './exam-type.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  
@Injectable({
  providedIn: 'root'
})


export class ExamTypeService {

  constructor(private http:HttpClient) { }
  private examUrl='http://localhost:8101/hrm_system/examtype';

  viewExamtypes(){
    return this.http.get<ExamType[]>(this.examUrl);
  }
  
}

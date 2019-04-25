import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../general/career-dev-plan/Model/user';
import { Department } from 'src/app/models/self-service/department';
import { Suggestion } from '../Model/suggestion';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  private suggestionAPI = "http://localhost:8020/hrm_system/suggestion";
  private departmentAPI = "http://localhost:8020/hrm_system/departments";
  private userAPI="http://localhost:8100/hrm_system/user";

  constructor(private http: HttpClient) { }

  public getSuggestion() {
    return this.http.get<Suggestion[]>(this.suggestionAPI);
  }
  public getUsers(){
  return this.http.get<User[]>(this.userAPI);
}
  public getDepartment() {
    return this.http.get<Department[]>(this.departmentAPI)
  }

  public createSuggestion(suggestion: Suggestion) {
    return this.http.post<Suggestion>(this.suggestionAPI, suggestion)
  }

  public getSuggestionByUser(uid: number) {
    return this.http.get<Suggestion[]>(this.suggestionAPI + "/" + uid)
  }

  
}


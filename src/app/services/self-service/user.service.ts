import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/self-service/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userAPI = "http://localhost:8080/hrm_system/user";

  constructor(private http: HttpClient) { }

  public getDepartments(){
    return this.http.get<User[]>(this.userAPI)
  }
  public getUser(){
    return this.http.get<User[]>(this.userAPI)
  }

}

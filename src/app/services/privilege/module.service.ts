import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Module } from 'src/app/models/privilege/module';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private http: HttpClient) { }

  private moduleAPI = "http://localhost:8080/hrm_system/module";

  getAllModules(){
    return this.http.get<Module[]>(this.moduleAPI);
  }
}

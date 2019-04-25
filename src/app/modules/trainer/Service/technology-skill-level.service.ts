import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TechnologySkillLevel } from '../Model/technology-skill-level';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class TechnologySkillLevelService {

  constructor(private httpObj:HttpClient) { }
  private technologySkillLevelurl = "http://localhost:8020/hrm_system/technologySkillLevel";

  public getTechnologySkillLevel(){
    return this.httpObj.get<[TechnologySkillLevel]>(this.technologySkillLevelurl);
  }
  public createTechnologySkillLevel(technologySkillLevel:TechnologySkillLevel){
    return this.httpObj.post<TechnologySkillLevel>(this.technologySkillLevelurl,technologySkillLevel);
  }
}

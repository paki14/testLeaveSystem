import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrainingSchedule } from '../Model/training-schedule';
@Injectable({
  providedIn: 'root'
})
export class TrainingScheduleService {

  constructor( private httpObj:HttpClient) { }
  private trainingScheduleyUrl='http://localhost:8020/hrm_system/trainingHistory';

  getAllTrainingSchedule(){
    return this.httpObj.get<TrainingSchedule[]>(this.trainingScheduleyUrl);
  }

  createTrainingSchedule(data){
    return this.httpObj.post<TrainingSchedule>(this.trainingScheduleyUrl,data);
  }

  deleteTrainingSchedule(trainingschedule){
    return this.httpObj.delete<TrainingSchedule>(this.trainingScheduleyUrl+"/"+trainingschedule.id,trainingschedule);
  }

  updateTrainingSchedule(trainingschedule){
    return this.httpObj.put<TrainingSchedule>(this.trainingScheduleyUrl+"/"+trainingschedule.id,trainingschedule);
  }

}

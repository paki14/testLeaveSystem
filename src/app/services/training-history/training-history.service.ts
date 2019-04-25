import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrainingHistory } from 'src/app/models/training-history';

@Injectable({
  providedIn: 'root'
})
export class TrainingHistoryService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8082/hrm_system/traininghistory';

  public getAllTrainingHistory() {
    return this.http.get<TrainingHistory[]>(this.baseUrl);
  }
  public createTrainingHistory(history) {
    return this.http.post<TrainingHistory>(this.baseUrl, history);
  }
  public updateTrainingHistory(history) {
    return this.http.put<TrainingHistory>(this.baseUrl + '/' + history.trainingId, history);

  }
  public deleteTrainingHistory(history: TrainingHistory) {
    return this.http.delete<TrainingHistory>(this.baseUrl + '/' + history.trainingId);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Feedback } from '../Model/feedback';
import { Trainer } from '../Model/trainer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private feedbackApi = "http://localhost:8020/hrm_system/feedback";
  private trainerApi = "http://localhost:8020/hrm_system/trainer";


  constructor(private http: HttpClient) { }

  public getFeedback() {
    return this.http.get<Feedback[]>(this.feedbackApi);
  }
  public getTrainer() {
    return this.http.get<Trainer[]>(this.trainerApi);
  }
  public createFeedback(feedback: Feedback) {
    return this.http.post<Feedback>(this.feedbackApi, feedback)
  }

}

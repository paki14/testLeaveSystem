import { Component, OnInit } from '@angular/core';
import { Suggestion } from 'src/app/modules/trainer/Model/suggestion';
import { SuggestionService } from 'src/app/modules/trainer/Service/suggestion.service';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
import { Feedback } from '../../../Model/feedback';
import { FeedbackService } from '../../../Service/feedback.service';

@Component({
  selector: 'app-view-suggestion',
  templateUrl: './view-suggestion.component.html',
  styleUrls: ['./view-suggestion.component.css']
})
export class ViewSuggestionComponent implements OnInit {

  feedback: Feedback[];
  feedbackObj = new Feedback();
  info: any;

  constructor(private feedbackService: FeedbackService, private token: TokenStorageService) { }

  ngOnInit() {
    this.getFeedback();
  }

  
  getFeedback() {
    return this.feedbackService.getFeedback().subscribe(data => {
      this.feedback = data;
      console.log(data);
    })
  }
}


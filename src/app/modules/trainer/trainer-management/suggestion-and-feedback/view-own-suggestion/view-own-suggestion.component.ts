import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
import { FeedbackService } from '../../../Service/feedback.service';
import { Feedback } from '../../../Model/feedback';

@Component({
  selector: 'app-view-own-suggestion',
  templateUrl: './view-own-suggestion.component.html',
  styleUrls: ['./view-own-suggestion.component.css']
})
export class ViewOwnSuggestionComponent implements OnInit {

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

  // getSuggetionbyUser() {
  //   this.info = {
  //     token: this.token.getToken(),
  //     username: this.token.getUsername(),
  //     authorities: this.token.getAuthorities()
  //   };
  //   this.suggestionService.getSuggestionByUser(1).subscribe(data => {
  //     this.suggestion = data;
  //     console.log(this.suggestion)
  //   })
  // }

}


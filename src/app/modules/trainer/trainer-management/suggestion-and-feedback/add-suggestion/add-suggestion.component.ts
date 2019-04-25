import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/self-service/department';
import { User } from 'src/app/modules/general/career-dev-plan/Model/user';
import { Suggestion } from 'src/app/modules/trainer/Model/suggestion';
import { SuggestionService } from 'src/app/modules/trainer/Service/suggestion.service';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
import { Feedback } from '../../../Model/feedback';
import { FeedbackService } from '../../../Service/feedback.service';
import { Trainer } from '../../../Model/trainer';

@Component({
  selector: 'app-add-suggestion',
  templateUrl: './add-suggestion.component.html',
  styleUrls: ['./add-suggestion.component.css']
})
export class AddSuggestionComponent implements OnInit {
  feedback: Feedback[];
  feedbackObj = new Feedback();
  trainer:Trainer[];
  trainerObj = new Trainer();
  msg: any;
  info:any;
  constructor(private feedbackService: FeedbackService,private token : TokenStorageService) { }

  ngOnInit() {
    this.getTrainers();
    // this.getSuggetionbyUser();

  }

  getTrainers() {
    this.feedbackService.getTrainer().subscribe(data => {
      this.trainer = data;
      console.log(data);
    })
  }

  // getSuggetionbyUser() {
  //   this.info = {
  //     token: this.token.getToken(),
  //     username: this.token.getUsername(),
  //     authorities: this.token.getAuthorities()
  //   };
  //   this.suggestionService.getSuggestionByUser(this.info.username).subscribe(data => {
  //     this.suggestion = data;
  //     console.log(this.suggestion)
  //   })
  // }
  // createSuggestion() {
  //   this.suggestionService.createSuggestion(this.suggestionObj).subscribe(data => {
  //     console.log(data);
  //   })
  // }

  createFeedback(){
    this.feedbackObj.trainee=1;
    this.feedbackObj.feedback1="Objective Of The Training Was Clearly Defined";
    this.feedbackObj.feedback2="Participation And Interaction Were Encouraged";
    this.feedbackObj.feedback3="Content Was Well Organized And Easy To Follow";
    this.feedbackObj.feedback4="Meterials Distributed Were Helpfull";
    this.feedbackObj.feedback5="This Training Will Helpfull For My Work";
    this.feedbackObj.feedback6="Trainer Was Good knowladge In Topic";
    this.feedbackObj.feedback7="Trainer Was Prepared";
    this.feedbackObj.feedback8="Training Objective Were Met";
    this.feedbackObj.feedback9="Allocated Time Were sufficient";
    this.feedbackObj.feedback10="Interaction With Trainee";
    this.feedbackObj.feedback11="How would you Rate For The Training";
    this.feedbackObj.feedback12="Recomending this course to others";
    this.feedbackObj.feedback13="The Trainer Given References was usefull";
    this.feedbackObj.feedback14="The trainer uses study meterials was help full";
    this.feedbackObj.feedback15="Was Trainer kept Functuality";
    this.feedbackService.createFeedback(this.feedbackObj).subscribe(data => {
      console.log(data);
    })
  }
}


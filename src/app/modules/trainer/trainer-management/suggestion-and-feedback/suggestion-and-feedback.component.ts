import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';

@Component({
  selector: 'app-suggestion-and-feedback',
  templateUrl: './suggestion-and-feedback.component.html',
  styleUrls: ['./suggestion-and-feedback.component.css']
})
export class SuggestionAndFeedbackComponent implements OnInit {

  constructor(private token: TokenStorageService) { }
  info: any;

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

}

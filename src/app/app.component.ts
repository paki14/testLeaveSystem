import { InteractionService } from 'src/app/services/interaction.service';
import { TokenStorageService } from './services/login/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { CareerDevPlanService } from './modules/general/career-dev-plan/Service/career-dev-plan.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private token: TokenStorageService,
    private careerDevPlanService:CareerDevPlanService,
    private interactionService: InteractionService) { }
  title = 'hrm-system-frontend';
  loggedIn= 'false';
  info: any;
  role: string;
  userName: string;
  userId: number;

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.interactionService.sendUserInfo(this.info);
    this.role = this.info.authorities;
    this.userName=this.info.username;
  }
  getUserIdByUserName() {
    this.careerDevPlanService.getUserIdByName(this.userName).subscribe(data => {
      // console.log(data.id);
      this.userId = data.id;
    });
  }
}


import { Component, OnInit } from '@angular/core';
import { CareerDevPlanService } from './Service/career-dev-plan.service';
import { CareerDevPlan } from './Model/career-dev-plan';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';

@Component({
  selector: 'app-career-dev-plan',
  templateUrl: './career-dev-plan.component.html',
  styleUrls: ['./career-dev-plan.component.css']
})
export class CareerDevPlanComponent implements OnInit {
 
  constructor(private token: TokenStorageService) { }
  title = 'hrm-system-frontend';
  loggedIn= 'false';
  info: any;
  role: string;
  
  ngOnInit() {
   
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.role = this.info.authorities;
  }
}


import { Component, OnInit } from '@angular/core';
import { CareerDevPlan } from '../Model/career-dev-plan';
import { User } from '../Model/user';
import { CareerDevPlanService } from '../Service/career-dev-plan.service';
import { UserService } from '../Service/user.service';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
import { EmpViewCareerPlanService } from '../Service/emp-view-career-plan.service';

@Component({
  selector: 'app-employee-view-hr-plans',
  templateUrl: './employee-view-hr-plans.component.html',
  styleUrls: ['./employee-view-hr-plans.component.css']
})
export class EmployeeViewHRPlansComponent implements OnInit {

  careerDevPlan: CareerDevPlan[];
  careerDevPlanObj = new CareerDevPlan();
  plans: any;
  userObj = new User();
  users: User[];
  info: any;
  userName: String;
  userId: number;
  careerDevPlanByUser: CareerDevPlan[];


  constructor(
    private careerDevPlanService: CareerDevPlanService,
    private userService: UserService,
    private token: TokenStorageService,
    private empViewCareerPlanService:EmpViewCareerPlanService) { }

  ngOnInit() {

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.userName = this.info.username;
    this.getUserIdByUserName(); 
    this.getUser();
  }

  getUserIdByUserName() {
    this.empViewCareerPlanService.getUserIdByName(this.userName).subscribe(data => {
      this.userId = data.id;
      return this.getCareerDevPlanByUserId(data.id);
    });
  }

  getCareerDevPlanByUserId(id) {
    this.careerDevPlanService.getCareerDevPlanById(id).subscribe(planByUser =>{
      this.careerDevPlanByUser=planByUser;
      console.log(planByUser);
    });
  }

  getUser() {
    return this.userService.getUser().subscribe(
      data => {
        this.users = data;
        this.userObj.id = 0;
      });
  }
} 

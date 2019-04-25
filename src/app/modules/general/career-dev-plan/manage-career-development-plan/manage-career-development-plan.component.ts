import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { CareerDevPlan } from '../Model/career-dev-plan';
import { CareerDevPlanService } from '../Service/career-dev-plan.service';
import { UserService } from '../Service/user.service';
import { User } from '../Model/user';
import { InteractionService } from 'src/app/services/interaction.service';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manage-career-development-plan',
  templateUrl: './manage-career-development-plan.component.html',
  styleUrls: ['./manage-career-development-plan.component.css']
})
export class ManageCareerDevelopmentPlanComponent implements OnInit {

  careerDevPlan: CareerDevPlan[];
  careerDevPlanByUser:CareerDevPlan[];
  careerDevPlanObj = new CareerDevPlan();

  careerDevPlanByUserObj = new CareerDevPlan();
  careerDevPlanObjEdit = new CareerDevPlan();
  plans: any;
  userObj = new User();
  users: User[];
  msg: any;
  info: any;
  userName: any;
  userId: number;

  displayedColumns: string[] = ['plans', 'status', 'edit', 'delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private careerDevPlanService: CareerDevPlanService,
    private userService: UserService,
    private interactionService: InteractionService,
    private token: TokenStorageService) { }

  ngOnInit() {

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

    this.userName = this.info.username;
    this.getCareerDevPlan();
    this.getUser();
    this.getUserIdByUserName();
    // this.getCareerDevPlanByUserId();

  }

  getCareerDevPlan() {
    this.careerDevPlanService.getCareerDevPlan().subscribe(data => {
      this.careerDevPlan = data;
      console.log(data);
    })
  }

  createCareerDevPlan() {
    this.careerDevPlanService.createcareerDevPlan(this.careerDevPlanObj).subscribe(data => {
      console.log(data);
      this.clearRequestPromotion();
      this.getCareerDevPlanByUserId(this.careerDevPlanObj.userId)
    })
  }

  getUser() {
    return this.userService.getUser().subscribe(
      data => {
        this.users = data;
      })
  }
  editCareerDev(plan) {
    console.log(plan);
    this.careerDevPlanObjEdit = Object.assign({}, plan);
  }

  updateCareerDevPlans() {
    this.careerDevPlanService.updatecareerDevPlan(this.careerDevPlanObjEdit).subscribe(data => {
      console.log(data);
      this.msg = "Data updated successfully";
      this.getCareerDevPlan();
    })
  }

  clearRequestPromotion() {
    this.careerDevPlanObj.userId = null;
    this.careerDevPlanObj.cdpId = null;
    this.careerDevPlanObj.status = null;
  }

  deleteCareerDev(plan) {
    this.careerDevPlanService.deletecareerDevPlan(plan).subscribe(data => {
      this.careerDevPlanObjEdit.id = plan.id;
      this.getCareerDevPlan();
    });
  }

  getUserIdByUserName() {
    this.careerDevPlanService.getUserIdByName(this.userName).subscribe(data => {
      console.log(data.id);
      this.userId = data.id;
    });
  }
 
  getCareerDevPlanByUserId(id) {
    this.careerDevPlanService.getCareerDevPlanById(id).subscribe(planByUser =>{
      this.careerDevPlanByUser=planByUser;
      console.log(planByUser);
    });
  }

  // getCareerDevPlanByUserId() {
  //   // this.userId = this.careerDevPlanObj.userId.id;
  //   this.careerDevPlanService.getCareerDevPlanById(this.userId).subscribe(planByUser => {
  //     this.careerDevPlanByUserObj = planByUser;
  //     console.log(planByUser);
  //   })
  // }

}

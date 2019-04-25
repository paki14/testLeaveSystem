import { Component, OnInit } from '@angular/core';
import { CareerDevPlanService } from '../../Service/career-dev-plan.service';
import { CareerDevPlan } from '../../Model/career-dev-plan';
import { InteractionService } from 'src/app/services/interaction.service';
import { UserService } from '../../Service/user.service';
import { User } from '../../Model/user';


@Component({
  selector: 'app-career-development-plan-form',
  templateUrl: './career-development-plan-form.component.html',
  styleUrls: ['./career-development-plan-form.component.css']
})
export class CareerDevelopmentPlanFormComponent implements OnInit {
  careerDevPlanObj = new CareerDevPlan
  CareerDevPlan: CareerDevPlan[];
  msg: any;
  userObj=new User();
  users:User[];

  constructor(
    private careerDevPlanService: CareerDevPlanService,
    private interactionService:InteractionService,
    private userService:UserService
    ) { }

  ngOnInit() {
  }

  getcareerDevlanFromCareerDevPlanInteratcion(){
    this.interactionService.comanyCDPDataSource$.subscribe(data => {
      this.careerDevPlanObj=data;
    })
  }

  updateCareerDevPlans() {
    this.careerDevPlanService.updatecareerDevPlan(this.careerDevPlanObj).subscribe(data => {
      console.log(data);
      this.msg = "Data updated successfully";
    })
  }

  getUser() {
    return this.userService.getUser().subscribe(
      data => {
        this.users = data;
        this.userObj.id=0;
      })
  }

  editCareerDev(plan) {
    console.log(plan);
    this.careerDevPlanObj = Object.assign({},plan);
  }
  
  
  // updateCareerDevById() {
  //   this.careerDevPlanService.updatecareerDevPlan(this.CareerDevPlanObj).subscribe(data => {
  //     this.msg = "Data updated successfully";
  //   });
  // }
}

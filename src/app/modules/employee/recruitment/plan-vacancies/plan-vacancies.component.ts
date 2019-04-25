import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PlanVacancy } from '../Modal/plan-vacancy';
import { RecruitmentType } from '../Modal/recruitment-type';
import { Department } from '../Modal/department';
import { User } from 'src/app/models/employee-termination/user';
import { PlanVacancyService } from '../Service/plan-vacancy.service';
import { DepartmentService } from '../Service/department.service';
import { RecruitmentTypeService } from '../Service/recruitment-type.service';
import { Job } from '../Modal/job';
import { JobService } from '../Service/job.service';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-plan-vacancies',
  templateUrl: './plan-vacancies.component.html',
  styleUrls: ['./plan-vacancies.component.css']
})
export class PlanVacanciesComponent implements OnInit {

  planVacancyObj: PlanVacancy = new PlanVacancy();
  planVacancy: PlanVacancy[];

  recruitmentType: RecruitmentType[];
  department: Department[];
  user: User[];
  job: Job[];

  constructor(private planVacancyService: PlanVacancyService,
    private departmentService: DepartmentService,
    private recruitmentTypeService: RecruitmentTypeService,
    private userService: UserService,
    private jobService: JobService,

  ) { }


  ngOnInit() {
    this.getAllPlanVacancyList();
    this.getAllRecruitmentTypeList();
    this.getAllDepartmentList();
    this.getAllUserList();
    this.getAllJobList();

  }


  clearPlanVacancyFunction() {
    this.planVacancyObj.noOfVacancy = null;
    this.planVacancyObj.salaryScale = null;
    this.planVacancyObj.vacancyOpenDate = null;
    this.planVacancyObj.vacancyCloseDate = null;
    this.planVacancyObj.interviewDate = null;
    this.planVacancyObj.keyRecuitment = null;
    this.planVacancyObj.user = null;
    this.planVacancyObj.job = null;
    this.planVacancyObj.department = null;
    this.planVacancyObj.recruitment = null;

  }
  getAllPlanVacancyList() {
    this.planVacancyService.getAllPlanVacancy().subscribe(data => {
      console.log(data);
      this.planVacancy = data;
    });
  }

  getAllRecruitmentTypeList() {
    this.recruitmentTypeService.getAllRecruitmentType().subscribe(data => {
      console.log(data);
      this.recruitmentType = data;
    });
  }

  getAllDepartmentList() {
    this.departmentService.getAllDepartment().subscribe(data => {
      console.log(data);
      this.department = data;
    });
  }

  getAllUserList() {
    this.userService.getAllUser().subscribe(data => {
      console.log(data);
      this.user = data;
    });
  }
  getAllJobList() {
    this.jobService.getAllJob().subscribe(data => {
      console.log(data);
      this.job = data;
    });
  }

  createPlanVacancy() {
    this.planVacancyService.createPlanVacancy(this.planVacancyObj).subscribe(data => {
      this.clearPlanVacancyFunction()
      console.log(data);
      this.getAllPlanVacancyList();
    });
  }
}

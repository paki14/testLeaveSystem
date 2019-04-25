import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { PlanVacancyService } from '../Service/plan-vacancy.service';
import { PlanVacancy } from '../Modal/plan-vacancy';
import { RecruitmentType } from '../Modal/recruitment-type';
import { Department } from '../Modal/department';
import { User } from 'src/app/models/employee-termination/user';
import { Job } from '../Modal/job';
import { DepartmentService } from '../Service/department.service';
import { RecruitmentTypeService } from '../Service/recruitment-type.service';
import { UserService } from '../Service/user.service';
import { JobService } from '../Service/job.service';

@Component({
  selector: 'app-view-plan-vacancies',
  templateUrl: './view-plan-vacancies.component.html',
  styleUrls: ['./view-plan-vacancies.component.css']
})
export class ViewPlanVacanciesComponent implements OnInit {
  planVacancyObj: PlanVacancy = new PlanVacancy();
  planVacancy: PlanVacancy[];

  recruitmentType: RecruitmentType[];
  department: Department[];
  user: User[];
  job: Job[];

  msg: any;

  displayedColumns: string[] = ['view', 'title', 'referencenumber', 'no', 'department', 'salary', 'button'];

  plan: any;

  dataSource = new MatTableDataSource<any>(this.plan);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private planVacancyService: PlanVacancyService,
    private departmentService: DepartmentService,
    private recruitmentTypeService: RecruitmentTypeService,
    private userService: UserService,
    private jobService: JobService, ) { }

  ngOnInit() {
    this.getAllPlanVacancyList();
    this.getAllRecruitmentTypeList();
    this.getAllDepartmentList();
    this.getAllUserList();
    this.getAllJobList();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  getAllPlanVacancyList() {
    this.planVacancyService.getAllPlanVacancy().subscribe(data => {
      this.plan = data;
      this.dataSource = new MatTableDataSource<any>(this.plan);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data);
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


  editPlanVacancy(planVacancy) {
    console.log(planVacancy);
    this.planVacancyObj = Object.assign({}, planVacancy);
  }

  updatePlanVacancy() {
    this.planVacancyService.updatePlanVacancy(this.planVacancyObj).subscribe(data => {
      this.getAllPlanVacancyList();
    });
  }
  deletePlanVacancyById(planVacancy) {
    console.log(planVacancy);
    this.planVacancyService.deletePlanVacancy(planVacancy).subscribe(data => {
      this.getAllPlanVacancyList();
    });
  }

 

}
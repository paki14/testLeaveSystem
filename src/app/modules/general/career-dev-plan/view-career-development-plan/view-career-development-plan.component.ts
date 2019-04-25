import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { User } from '../Model/user';
import { CareerDevPlan } from '../Model/career-dev-plan';
import { UserService } from 'src/app/services/self-service/user.service';
import { EmpViewCareerPlanService } from '../Service/emp-view-career-plan.service';

@Component({
  selector: 'app-view-career-development-plan',
  templateUrl: './view-career-development-plan.component.html',
  styleUrls: ['./view-career-development-plan.component.css']
})
export class ViewCareerDevelopmentPlanComponent implements OnInit {

  careerDevPlan: CareerDevPlan[];
  careerDevPlanObj = new CareerDevPlan();
  plans: any;
  userObj = new User();
  users: User[];
  msg: any;

  displayedColumns: string[] = ['employeeName', 'position', 'PARDate', 'PARScore', 'plans'];
  empDet = [
    { 'employeeName': 'Pakikaran', 'position': 'Software Engineer', 'PARDate': '2018-10-09', 'PARScore': '2.5', 'plans': '' },
    { 'employeeName': 'Dilshanth', 'position': 'Software Engineer', 'PARDate': '2018-10-09', 'PARScore': '3.5', 'plans': '' },
    { 'employeeName': 'Sinthuja', 'position': 'HR', 'PARDate': '2018-10-09', 'PARScore': '3.2', 'plans': '' },
    // { 'employeeName': 'Besty', 'position': 'Software Engineer', 'PARDate': '2018-10-09', 'PARScore': '3.1', 'plans': '' }
  ]

  dataSource = new MatTableDataSource<any>(this.empDet);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private empViewCareerPlanService: EmpViewCareerPlanService,
    private userService: UserService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.empDet);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getCareerDevPlan();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getCareerDevPlan() {
    this.empViewCareerPlanService.getCareerDevPlan().subscribe(data => {
      this.careerDevPlan = data;
      console.log(data);
    })
  }

  getUser() {
    return this.userService.getUser().subscribe(
      data => {
        this.users = data;
    })
  }
}

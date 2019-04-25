import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEmpSalaryChart } from '../../Model/view-emp-salary-chart';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ViewEmpSalaryChartService } from '../../Service/view-emp-salary-chart.service';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
import { LoginCredential } from '../../Model/login-credential';

@Component({
  selector: 'app-salary-chart-employee',
  templateUrl: './salary-chart-employee.component.html',
  styleUrls: ['./salary-chart-employee.component.css']
})
export class SalaryChartEmployeeComponent implements OnInit {
  
  viewSalaryChart: ViewEmpSalaryChart;
  info: any;
  loginCredentialObj = new LoginCredential();
  constructor(private viewEmpSalaryChartService: ViewEmpSalaryChartService, private token: TokenStorageService) { }

  ngOnInit():void {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    }

    this.viewEmpSalaryChartService.getUserIdByName(this.info.username).subscribe(data=>{
      this.loginCredentialObj = data;
      this.getAllSalaryChartData(this.loginCredentialObj.username);
    })
  }

  getAllSalaryChartData(userId){
    this.viewEmpSalaryChartService.getSalaryChartByName(userId).subscribe(data=>{
      this.viewSalaryChart = data;
      console.log(this.viewSalaryChart);
    })
  }
  
}


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemunerationComponent } from './remuneration.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { AvailableEmpViewLoanComponent } from './Loan/available-emp-view-loan/available-emp-view-loan.component';
import { AvilableLoanViewByEmpComponent } from './Loan/avilable-loan-view-by-emp/avilable-loan-view-by-emp.component';
import { EligibleLoanComponent } from './Loan/eligible-loan/eligible-loan.component';
import { TakenViewByEmpComponent } from './Loan/taken-view-by-emp/taken-view-by-emp.component';
import { TakenViewByHrComponent } from './Loan/taken-view-by-hr/taken-view-by-hr.component';
import { ViewLoanComponent } from './Loan/view-loan/view-loan.component';
import { TapViewComponent } from './tap-view/tap-view.component';
import { ViewSalaryChartComponent } from './salary-chart/view-salary-chart/view-salary-chart.component';
import { EmpViewComponent } from './salary details/emp-view/emp-view.component';
import { HrSalaryViewComponent } from './salary details/hr-salary-view/hr-salary-view.component';
import { ViewAllowancesComponent } from './benefits-allowances/view-allowances/view-allowances.component';
import {HttpClientModule} from '@angular/common/http';
import { LoanDetailsService } from './Service/loan-details.service';
import { UserLoanDetailsService } from './Service/user-loan-details.service';
import { HrViewSalaryDetailsService } from './Service/hr-view-salary-details.service';
import { EmpViewLoanDetailsService } from './Service/emp-view-loan-details.service';
import { SalaryChartEmployeeComponent } from './salary-chart/salary-chart-employee/salary-chart-employee.component';
import { ViewBenefitsAllowancesService } from './Service/view-benefits-allowances.service';
import { ViewEmpSalaryChartService } from './Service/view-emp-salary-chart.service';
import { LoanComponent } from './Loan/loan/loan.component';


const routes: Routes = [
  {
    path: '',
    component: RemunerationComponent,
    children:[
      {
        path:'viewLoan',
        component:LoanComponent,
        children: [
          {
            path:'viewtakenemploan',
            component:TakenViewByEmpComponent
          }
          ,
          {
            path:'viewtakenhrloan',
            component:TakenViewByHrComponent
          }
          ,
          {
            path:'viewtakenloan',
            component:TakenViewByEmpComponent
          }
          ,
          {
            path:'viewloan',
            component:ViewLoanComponent
          }
        ]
      },
      {
        path:'salaryChartEmpView',
        component:SalaryChartEmployeeComponent
      }
      ,
      {
        path:'salaryChartHrView',
        component:ViewSalaryChartComponent
      }
      ,
      {
        path:'salaryDetailsHrView',
        component:HrSalaryViewComponent
      }
      ,
      {
        path:'salaryDetailsEmpView',
        component:EmpViewComponent
      }
      ,
      {
        path:'allowance',
        component:ViewAllowancesComponent
      }

    
    ]
  }
  
]
@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RemunerationComponent,
    AvailableEmpViewLoanComponent,
    AvilableLoanViewByEmpComponent,
    EligibleLoanComponent,
    TakenViewByEmpComponent,
    TakenViewByHrComponent,
    ViewLoanComponent,
    TapViewComponent,
    EmpViewComponent,
    HrSalaryViewComponent,
    ViewSalaryChartComponent,
    ViewAllowancesComponent,
    SalaryChartEmployeeComponent,
    LoanComponent
  ], 
  providers: [LoanDetailsService,UserLoanDetailsService,ViewBenefitsAllowancesService,ViewEmpSalaryChartService,EmpViewLoanDetailsService,HrViewSalaryDetailsService]
})
export class RemunerationModule { }

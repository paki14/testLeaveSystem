import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminationComponent } from './termination.component';
import { EmployeeAddTerminationRecordComponent } from './employee-add-termination-record/employee-add-termination-record.component';
import { EmployeeArrangeDiscussionComponent } from './employee-arrange-discussion/employee-arrange-discussion.component';
import { EmployeeRequestTerminationComponent } from './employee-request-termination/employee-request-termination.component';
import { EmployeeTerminationHistoryComponent } from './employee-termination-history/employee-termination-history.component';
import { EmployeeTerminationRequestsComponent } from './employee-termination-requests/employee-termination-requests.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { EmployeeDiscussionScheduleComponent } from './employee-discussion-schedule/employee-discussion-schedule.component';
import { CompanyPoliciesComponent } from './employee-termination-requests/modal/company-policies/company-policies.component';
import { LegalIssueStatusComponent } from './employee-termination-requests/modal/legal-issue-status/legal-issue-status.component';
import { TerminationLetterComponent } from './employee-termination-requests/modal/termination-letter/termination-letter.component';
import { FormsModule } from '@angular/forms';

const routes:Routes=[
  {
    path:'',
    component:TerminationComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TerminationComponent, 
    EmployeeAddTerminationRecordComponent, 
    EmployeeArrangeDiscussionComponent, 
    EmployeeRequestTerminationComponent, 
    EmployeeTerminationHistoryComponent, 
    EmployeeTerminationRequestsComponent,
    EmployeeDiscussionScheduleComponent,
    CompanyPoliciesComponent,
    LegalIssueStatusComponent,
    TerminationLetterComponent
  ]
     
})
export class TerminationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllLeaveComponent } from './all-leave/all-leave.component';
import { AcceptedLeaveComponent } from './accepted-leave/accepted-leave.component';
import { RejectedLeaveComponent } from './rejected-leave/rejected-leave.component';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { FormsModule } from '@angular/forms';
import { LeaveHistoryComponent } from './leave-history.component';

const routes: Routes = [
  {
    path: '', component: LeaveHistoryComponent,
    children:[
    {
      path: 'allrequests',
      component: AllLeaveComponent
    },
    {
      path: 'accepted',
      component: AcceptedLeaveComponent
    },
    {
      path: 'rejected',
      component: RejectedLeaveComponent
    },
  ]}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModuleModule,
    FormsModule
  ],
  declarations: [
    AllLeaveComponent,
    AcceptedLeaveComponent,
    RejectedLeaveComponent,
    LeaveHistoryComponent
  ]
})
export class LeaveHistoryModule { }

import { RequestConformModalComponent } from './apply-leave/Modal/request-conform-modal/request-conform-modal.component';
import { AllLeaveComponent } from './leave-history/all-leave/all-leave.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveManagementComponent } from './leave-management.component';
import { CarryForwardLeaveRequestComponent } from './carry-forward-leave-request/carry-forward-leave-request.component';
import { CarryForwardLeaveComponent } from './carry-forward-leave/carry-forward-leave.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { AllocateLeaveComponent } from './allocate-leave/allocate-leave.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { ApproveLeaveComponent } from './approve-leave/approve-leave.component';
import { LeaveHistoryComponent } from './leave-history/leave-history.component';
import { LeaveAcceptModalComponent } from './approve-leave/Modal/leave-accept-modal/leave-accept-modal.component';
import { LeaveRejectModalComponent } from './approve-leave/Modal/leave-reject-modal/leave-reject-modal.component';
import { LeaveCalendarComponent } from './leave-calendar/leave-calendar.component';
import { PostEventComponent } from './post-event/post-event.component';
import { ViewSpecificEmpLeaveComponent } from './view-specific-emp-leave/view-specific-emp-leave.component';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { ApproveCancelLeaveComponent } from './Cancel-Leave/approve-cancel-leave/approve-cancel-leave.component';
import { CancelLeaveAcceptComponent } from './Cancel-Leave/approve-cancel-leave/Modal/cancel-leave-accept/cancel-leave-accept.component';
import { CancelLeaveRejectComponent } from './Cancel-Leave/approve-cancel-leave/Modal/cancel-leave-reject/cancel-leave-reject.component';
import { ViewLeaveDetailsComponent } from './Cancel-Leave/approve-cancel-leave/Modal/view-leave-details/view-leave-details.component';
import { RejectedLeaveComponent } from './leave-history/rejected-leave/rejected-leave.component';
import { AcceptedLeaveComponent } from './leave-history/accepted-leave/accepted-leave.component';
import { ViewMyLeaveComponent } from './view-my-leave/view-my-leave.component';
import { ConformCancelLeaveRequestModelComponent } from './view-my-leave/Model/conform-cancel-leave-request-model/conform-cancel-leave-request-model.component';
import { EmployeeLeaveHistoryComponent } from './employee-leave-history/employee-leave-history.component';
import { RemainLeaveComponent } from './remain-leave/remain-leave.component';
import { ConfirmCarryforwardRequestComponent } from './carry-forward-leave-request/Modal/confirm-carryforward-request/confirm-carryforward-request.component';
import { AcceptCarryforwardRequestComponent } from './carry-forward-leave/Modal/accept-carryforward-request/accept-carryforward-request.component';
import { RejectCarryforwardRequestComponent } from './carry-forward-leave/Modal/reject-carryforward-request/reject-carryforward-request.component';
import { ApplyLeaveViewComponent } from './apply-leave-view/apply-leave-view.component';
import { ViewRejectDetailsComponent } from './view-my-leave/Model/view-reject-details/view-reject-details.component';
import { RejectCarryforwardRequestDetailsComponent } from './carry-forward-leave-request/reject-carryforward-request-details/reject-carryforward-request-details.component';
import { ViewMyLeaveReasonComponent } from './view-my-leave/Model/view-my-leave-reason/view-my-leave-reason.component';

const routes: Routes = [
  {
    path: '',
    component: LeaveManagementComponent,

        children: [
         
          {
            path:'requestedLeaves',
            component:ApproveLeaveComponent
          },
          {
              path: 'leaveHistory',
              loadChildren: './leave-history/leave-history.module#LeaveHistoryModule'
          },
          {
            path:'LeaveCancelRequests',
            component:ApproveCancelLeaveComponent
          },
          {
            path:'RequestLeave',
            component:ApplyLeaveViewComponent
          },
          {
            path:'leaveCalender',
            component:LeaveCalendarComponent
          },
          {
            path:'carryforwardRequests',
            component:CarryForwardLeaveComponent
          },
        ],
        
      },
     

    ]
  


@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    FormsModule,
    NgbModalModule.forRoot(),
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    RouterModule.forChild(routes)
  ],
  declarations: [
    LeaveManagementComponent,
    CarryForwardLeaveRequestComponent,
    CarryForwardLeaveComponent,
    AllocateLeaveComponent,
    ApplyLeaveComponent,
    ApproveLeaveComponent,
    // LeaveHistoryComponent,
    LeaveAcceptModalComponent,
    LeaveRejectModalComponent,
    LeaveCalendarComponent,
    PostEventComponent,
    ViewSpecificEmpLeaveComponent,
    ApproveCancelLeaveComponent,
    CancelLeaveAcceptComponent,
    CancelLeaveRejectComponent,
    ViewLeaveDetailsComponent,
    // AllLeaveComponent,
    // RejectedLeaveComponent,
    // AcceptedLeaveComponent,
    ViewMyLeaveComponent,
    ConformCancelLeaveRequestModelComponent,
    EmployeeLeaveHistoryComponent,
    RemainLeaveComponent,
    RequestConformModalComponent,
    ConfirmCarryforwardRequestComponent,
    AcceptCarryforwardRequestComponent,
    RejectCarryforwardRequestComponent,
    ApplyLeaveViewComponent,
    ViewRejectDetailsComponent,
    RejectCarryforwardRequestDetailsComponent,
    ViewMyLeaveReasonComponent
  ],
  providers: []
})
export class LeaveManagementModule { }

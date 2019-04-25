import { Component, OnInit } from '@angular/core';
import { Cancel } from 'src/app/models/leave-management/cancel';
import { CancelRequestService } from 'src/app/services/leave-management/cancel-request.service';
import { LeaveRequestService } from 'src/app/services/leave-management/leave-request.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-conform-cancel-leave-request-model',
  templateUrl: './conform-cancel-leave-request-model.component.html',
  styleUrls: ['./conform-cancel-leave-request-model.component.css']
})
export class ConformCancelLeaveRequestModelComponent implements OnInit {

  cancelObj = new Cancel();

  constructor(private interactionService: InteractionService,
    private cancelRequestService: CancelRequestService,
    private leaveRequestService: LeaveRequestService) { }

  ngOnInit() {
    this.getLeaveRequest();
  }

  getLeaveRequest() {
    this.interactionService.leaveRequestDataSource$.subscribe(data => {
      this.cancelObj.leaveRequest = data;
    })
  }

  cancelLeaveRequest() {
    if (this.cancelObj.leaveRequest.status == 'ACCEPTED') {
      this.cancelRequestService.cancelRequest(this.cancelObj).subscribe(data => {
        this.sendSuccessMsg();
      });
    }
    if (this.cancelObj.leaveRequest.status == 'PENDING') {
      this.deleteLeaveRequest();
    }
  }

  deleteLeaveRequest() {
    this.leaveRequestService.deleteLeaveRequest(this.cancelObj.leaveRequest.id).subscribe(data => {
      this.sendSuccessMsg();
    })
  }

  sendSuccessMsg() {
    this.interactionService.upadateMsg("cancelSuccess");
  }
}
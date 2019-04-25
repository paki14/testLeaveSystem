import { LeaveRequestService } from './../../../../../../services/leave-management/leave-request.service';
import { Component, OnInit } from '@angular/core';
import { Reject } from 'src/app/models/leave-management/reject';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-leave-reject-modal',
  templateUrl: './leave-reject-modal.component.html',
  styleUrls: ['./leave-reject-modal.component.css']
})
export class LeaveRejectModalComponent implements OnInit {

  rejectObj: Reject = new Reject();
  info:any;

  constructor(private leaveRequestService: LeaveRequestService, 
    private interactionService: InteractionService,
    private token: TokenStorageService
    ) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.getLeaveRequestId();
  }

  rejectLeaverequest() {
    this.rejectObj.userName = this.info.username;
    this.leaveRequestService.rejectLeaveRequest(this.rejectObj).subscribe(data => {
      this.sendSuccessMsg();
    })
  }

  getLeaveRequestId() {
    this.interactionService.leaveIdDataSource$.subscribe(data => {
      this.rejectObj.leaveRequestId = data;
    })
  }

  sendSuccessMsg() {
    this.interactionService.upadateMsg("RejectSuccess");
  }
}

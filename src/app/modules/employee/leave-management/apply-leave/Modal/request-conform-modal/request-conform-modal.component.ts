import { LeaveRequestService } from './../../../../../../services/leave-management/leave-request.service';
import { Component, OnInit } from '@angular/core';
import { LeaveRequest } from 'src/app/models/leave-management/leave-request';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-request-conform-modal',
  templateUrl: './request-conform-modal.component.html',
  styleUrls: ['./request-conform-modal.component.css']
})
export class RequestConformModalComponent implements OnInit {

  info: any;
  leaveRequest: LeaveRequest = new LeaveRequest();

  constructor(
    private interactionService: InteractionService,
    private leaveRequestService: LeaveRequestService,
    private token: TokenStorageService
  ) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.getLeaveRequest();
  }

  getLeaveRequest() {
    this.interactionService.leaveRequestDataSource$.subscribe(data => {
      this.leaveRequest = data;
    })
  }

  addLeaveRequest() {
    this.leaveRequest.userName = this.info.username;
    this.leaveRequestService.addLeaveRequest(this.leaveRequest).subscribe(data => {
      this.resetLeaveRequest();
      this.interactionService.upadateMsg("leaveRequestSent");
    })
  }

  resetLeaveRequest() {
    this.leaveRequest.leaveAllocation = null;
    this.leaveRequest = null;
  }
}

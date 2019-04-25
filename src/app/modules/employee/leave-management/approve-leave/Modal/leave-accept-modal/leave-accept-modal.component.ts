import { Component, OnInit } from '@angular/core';
import { Accept } from 'src/app/models/leave-management/accept';
import { LeaveRequestService } from 'src/app/services/leave-management/leave-request.service';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-leave-accept-modal',
  templateUrl: './leave-accept-modal.component.html',
  styleUrls: ['./leave-accept-modal.component.css']
})
export class LeaveAcceptModalComponent implements OnInit {
  
  acceptObj = new Accept();
  info:any;
  role: string;
  user:string;

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
    this.role = this.info.authorities;
    this.user = this.info.username;
    this.getLeaveRequestId();
  }

  acceptLeaverequest() {
    this.acceptObj.userName = this.user;
    this.leaveRequestService.acceptLeaveRequest(this.acceptObj).subscribe(data => {
      this.sendSuccessMsg();
    })
  }

  getLeaveRequestId() {
    this.interactionService.leaveIdDataSource$.subscribe(data =>{
        this.acceptObj.leaveRequestId = data;
        this.sendSuccessMsg();
    })
  }
  sendSuccessMsg() {
    this.interactionService.upadateMsg("AcceptSuccess");
  }
}

import { Component, OnInit } from '@angular/core';
import { CarryforwardLeaveRequest } from '../../../../../../models/leave-management/carryforward-leave-request';
import { InteractionService } from '../../../../../../services/interaction.service';
import { CarryforwardLeaveRequestService } from '../../../../../../services/leave-management/carryforward-leave-request.service';
import { TokenStorageService } from '../../../../../../services/login/token-storage.service';
import { LeaveAllocation } from 'src/app/models/leave-management/leave-allocation';
import { LeaveAllocationService } from 'src/app/services/leave-management/leave-allocation.service';

@Component({
  selector: 'app-confirm-carryforward-request',
  templateUrl: './confirm-carryforward-request.component.html',
  styleUrls: ['./confirm-carryforward-request.component.css']
})
export class ConfirmCarryforwardRequestComponent implements OnInit {

  info: any;
  annualLeaveByUsername: LeaveAllocation;
  carryforwardResquest: CarryforwardLeaveRequest = new CarryforwardLeaveRequest();
  error:boolean = false;

  constructor(
    private interactionService: InteractionService,
    private leaveAllocationService: LeaveAllocationService,
    private carryforwardLeaveRequestService: CarryforwardLeaveRequestService,
    private token: TokenStorageService
  ) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.getErrorMessage();
    this.getCarryforwardLeaveRequest();
    //..............................
    // this.getLeaveAllocation();
  }
// ..........................................
// getLeaveAllocation() {
//   this.leaveAllocationService.getCarryForwardAnualLeave(this.info.username).subscribe(data => {
//     this.annualLeaveByUsername = data;
//   })
// }
// ...........................................
  getCarryforwardLeaveRequest() {
    this.interactionService.carryforwardRequestDataSource$.subscribe(data => {
      this.carryforwardResquest = data;     
    })
  }

  sendCarryforwardLeaveRequest() {
    this.carryforwardResquest.userName = this.info.username;
    this.carryforwardLeaveRequestService.addCarryforwardLeaveRequest(this.carryforwardResquest).subscribe(data => {
      this.resetCarryforwardLeaveRequest();
      this.interactionService.upadateMsg("carryforwardLeaveRequestSent");
    })
  }

  resetCarryforwardLeaveRequest() {
    this.carryforwardResquest.carryforwardDays = null;
    this.carryforwardResquest = null;
  }

  getErrorMessage() {
    this.interactionService.msgDataSource$.subscribe(data =>{
      if(data === "error") {
        this.error = true;
      }
    })
  }
}

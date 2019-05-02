import { LeaveAllocation } from "./../../../../models/leave-management/leave-allocation";
import { LeaveAllocationService } from "./../../../../services/leave-management/leave-allocation.service";
import { Component, OnInit } from "@angular/core";
import { LeaveRequest } from "src/app/models/leave-management/leave-request";
import { TokenStorageService } from "src/app/services/login/token-storage.service";
import { InteractionService } from "src/app/services/interaction.service";

@Component({
  selector: "app-apply-leave",
  templateUrl: "./apply-leave.component.html",
  styleUrls: ["./apply-leave.component.css"]
})
export class ApplyLeaveComponent implements OnInit {
  constructor(
    private leaveAllocationService: LeaveAllocationService,
    private interactionService: InteractionService,
    private token: TokenStorageService
  ) {}

  today = new Date();
  leaveRequest = new LeaveRequest();
  leaveAllocation: LeaveAllocation[];
  info: any;
  default: LeaveAllocation = new LeaveAllocation();

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.leaveRequest.noOfDays = 0;
    this.leaveRequest.leaveAllocation = this.default;
    this.getLeaveAllocation();
    this.getSuccessMsg1();
  }

  clearField() {
    this.leaveRequest.reason = null;
    this.leaveRequest.startDate = null;
    this.leaveRequest.endDate = null;
    this.leaveRequest.attachment = null;
    this.leaveRequest.userName = null;
    this.leaveRequest.noOfDays = 0;
  }

  getLeaveAllocation() {
    this.leaveAllocationService
      .getAllLeaveAllocationByUser(this.info.username)
      .subscribe(data => {
        this.leaveAllocation = data;
      });
  }

  noOfDays() {
    if (
      this.leaveRequest.endDate != null &&
      this.leaveRequest.startDate != null
    ) {
      var time =
        new Date(this.leaveRequest.endDate).getTime() -
        new Date(this.leaveRequest.startDate).getTime();
      this.leaveRequest.noOfDays = time / (1000 * 60 * 60 * 24) + 1;
    }
  }

  sendLeaveRequest() {
    this.interactionService.sendLeaveRequest(this.leaveRequest);
  }

  getSuccessMsg1() {
    this.interactionService.msgDataSource$.subscribe(data => {
      if (data == "leaveRequestSent") {
        this.getLeaveAllocation();
        this.responseMsg = "success1";
        this.responseMsgTimeOut();
      }
        this.clearField();
    });
  }
  responseMsg: string;
  responseMsgTimeOut() {
    setTimeout(() => {
      this.responseMsg = null;
    }, 3000);
  }
}



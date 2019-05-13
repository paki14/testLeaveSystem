import { LeaveRequestService } from "./../../../../../../services/leave-management/leave-request.service";
import { Component, OnInit } from "@angular/core";
import { Reject } from "src/app/models/leave-management/reject";
import { TokenStorageService } from "src/app/services/login/token-storage.service";
import { InteractionService } from "src/app/services/interaction.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-leave-reject-modal",
  templateUrl: "./leave-reject-modal.component.html",
  styleUrls: ["./leave-reject-modal.component.css"]
})
export class LeaveRejectModalComponent implements OnInit {
  rejectObj: Reject = new Reject();
  info: any;
  constructor(
    private leaveRequestService: LeaveRequestService,
    private interactionService: InteractionService,
    private token: TokenStorageService
  ) {}

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
    console.log(this.rejectObj);
    this.leaveRequestService
      .rejectLeaveRequest(this.rejectObj)
      .subscribe(data => {
        console.log(data);
        this.sendSuccessMsg();
        
      });
      this.clearField();
      // this.leaveRejectForm.get('reject_hr_reason').clearValidators();
  }
  // clearField() {
  //   throw new Error("Method not implemented.");
  // }
  
  clearField() {
    this.rejectObj.rejectReason = null;
  }
  

  getLeaveRequestId() {
    this.interactionService.leaveIdDataSource$.subscribe(data => {
      this.rejectObj.leaveRequestId = data;
      this.setValidate();
    });
  }
  setValidate() {
    throw new Error("Method not implemented.");
  }


  sendSuccessMsg() {
    this.interactionService.upadateMsg("RejectSuccess");
    // this.clearField();
    this.responseMsg = "success2";
    this.responseMsgTimeOut();
}
responseMsg: string;
responseMsgTimeOut() {
setTimeout(() => {
  this.responseMsg = null;
}, 1000);
}

// ..................validatation..........
leaveRejectForm = new FormGroup({
  reject_hr_reason: new FormControl('', Validators.compose([
    Validators.required,
    Validators.maxLength(100),
    Validators.minLength(3),
    Validators.pattern("^[a-zA-Z,.' ]*$")
  ]))
});

// clearField() {
//   this.rejectObj.rejectReason = null;
// }

// setValidate(){
// this.leaveRejectForm.get('reject_hr_reason').setValidators([
//   Validators.required,
//   Validators.maxLength(150),
//   Validators.minLength(3),
//   Validators.pattern("^[a-zA-Z,.' ]*$")
// ])
// this.leaveRejectForm.updateValueAndValidity();
// }
}


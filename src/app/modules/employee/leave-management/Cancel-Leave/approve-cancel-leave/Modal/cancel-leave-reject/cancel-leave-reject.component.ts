import { CancelRequestService } from "src/app/services/leave-management/cancel-request.service";
import { Component, OnInit } from "@angular/core";
import { RejectCancelRequest } from "src/app/models/leave-management/reject-cancel-request";
import { TokenStorageService } from "src/app/services/login/token-storage.service";
import { InteractionService } from "src/app/services/interaction.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { isValid } from "date-fns";

@Component({
  selector: "app-cancel-leave-reject",
  templateUrl: "./cancel-leave-reject.component.html",
  styleUrls: ["./cancel-leave-reject.component.css"]
})
export class CancelLeaveRejectComponent implements OnInit {
  info: any;
  rejectCancelRequest: RejectCancelRequest = new RejectCancelRequest();
  constructor(
    private interactionService: InteractionService,
    private cancelRequestService: CancelRequestService,
    private token: TokenStorageService
  ) {}

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.getCancelRequestId();
    
  }

  getCancelRequestId() {
    this.interactionService.cancelRequestIdDataSource$.subscribe(data => {
      this.rejectCancelRequest.cancelRequestId = data;
      this.setValidate();
    });
  }
  
  rejectCancelLeaveRequest() {
    this.rejectCancelRequest.userName = this.info.username;
    console.log(this.rejectCancelRequest);
    this.cancelRequestService
      .rejectCancelRequest(this.rejectCancelRequest)
      .subscribe(data => {
        console.log(data);
        this.sendSuccessMessage();
      });
      this.clearImmediate();
      this.rejectForm.get('reject_lr_reason').clearValidators();
  }

  sendSuccessMessage() {
    this.interactionService.upadateMsg("cancelRequestRejected");
  }
  // ..................validatation..........
  rejectForm = new FormGroup({
    reject_lr_reason: new FormControl('', Validators.compose([
      Validators.required,
      Validators.maxLength(100),
      Validators.minLength(3),
      Validators.pattern("^[a-zA-Z,.' ]*$")
    ]))
  })
 
  clearImmediate(){
    this.rejectCancelRequest.rejectReason = null;
  }
  setValidate(){
  this.rejectForm.get('reject_lr_reason').setValidators([
    Validators.required,
    Validators.maxLength(150),
    Validators.minLength(3),
    Validators.pattern("^[a-zA-Z,.' ]*$")
  ])
  this.rejectForm.updateValueAndValidity();
}
}

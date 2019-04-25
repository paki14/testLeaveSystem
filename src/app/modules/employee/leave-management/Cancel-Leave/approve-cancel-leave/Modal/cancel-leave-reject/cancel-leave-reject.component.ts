import { CancelRequestService } from 'src/app/services/leave-management/cancel-request.service';
import { Component, OnInit } from '@angular/core';
import { RejectCancelRequest } from 'src/app/models/leave-management/reject-cancel-request';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-cancel-leave-reject',
  templateUrl: './cancel-leave-reject.component.html',
  styleUrls: ['./cancel-leave-reject.component.css']
})
export class CancelLeaveRejectComponent implements OnInit {

  info: any;
  rejectCancelRequest: RejectCancelRequest = new RejectCancelRequest();
  constructor(
    private interactionService: InteractionService,
    private cancelRequestService: CancelRequestService,
    private token: TokenStorageService

  ) { }

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
    })
  }
  rejectCancelLeaveRequest() {
    this.rejectCancelRequest.userName = this.info.username;
    console.log(this.rejectCancelRequest);
    this.cancelRequestService.rejectCancelRequest(this.rejectCancelRequest).subscribe(data =>{
      console.log(data);
      this.sendSuccessMessage();
    })
  }

  sendSuccessMessage(){
    this.interactionService.upadateMsg("cancelRequestRejected");
  }

}

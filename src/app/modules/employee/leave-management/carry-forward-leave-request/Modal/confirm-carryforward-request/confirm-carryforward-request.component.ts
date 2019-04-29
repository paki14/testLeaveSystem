import { Component, OnInit } from '@angular/core';
import { CarryforwardLeaveRequest } from '../../../../../../models/leave-management/carryforward-leave-request';
import { InteractionService } from '../../../../../../services/interaction.service';
import { CarryforwardLeaveRequestService } from '../../../../../../services/leave-management/carryforward-leave-request.service';
import { TokenStorageService } from '../../../../../../services/login/token-storage.service';

@Component({
  selector: 'app-confirm-carryforward-request',
  templateUrl: './confirm-carryforward-request.component.html',
  styleUrls: ['./confirm-carryforward-request.component.css']
})
export class ConfirmCarryforwardRequestComponent implements OnInit {

  info: any;
  carryforwardResquest: CarryforwardLeaveRequest = new CarryforwardLeaveRequest();
  error:boolean = false;

  constructor(
    private interactionService: InteractionService,
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
  }

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

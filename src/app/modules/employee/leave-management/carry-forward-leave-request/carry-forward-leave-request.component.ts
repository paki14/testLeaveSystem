import { Component, OnInit } from '@angular/core';
import { CarryforwardLeaveRequestService } from 'src/app/services/leave-management/carryforward-leave-request.service';
import { CarryforwardLeaveRequest, CarryforwardRequestData } from 'src/app/models/leave-management/carryforward-leave-request';
import { TokenStorageService } from '../../../../services/login/token-storage.service';
import { InteractionService } from '../../../../services/interaction.service';
import { LeaveAllocationService } from '../../../../services/leave-management/leave-allocation.service';
import { LeaveAllocation } from '../../../../models/leave-management/leave-allocation';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-carry-forward-leave-request',
  templateUrl: './carry-forward-leave-request.component.html',
  styleUrls: ['./carry-forward-leave-request.component.css']
})
export class CarryForwardLeaveRequestComponent implements OnInit {
  //Mayu
  info: { token: string; username: string; authorities: string[];};
  annualLeaveByUsername: LeaveAllocation;
  carryforwardRequest = new CarryforwardLeaveRequest();
  carryforwardLeave: CarryforwardRequestData = new CarryforwardRequestData();
  //End
  carry:boolean
  constructor(
    private carryforwardRequestService: CarryforwardLeaveRequestService,
    private token: TokenStorageService,
    private leaveAllocationService: LeaveAllocationService,
    private interactionService: InteractionService) { }

  ngOnInit() {
    //by mayu
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
    };
    this.getCarryforwardLeaveRequest()
    this.getLeaveAllocation();
    this.getSuccessMessage();
    //end 
  }

  getCarryforwardLeaveRequest() {
    this.carryforwardRequestService.getCarryforwardLeaveRequestByUser(this.info.username).subscribe(data => {
      this.carryforwardLeave = data;
    })
  }

  clearAfterAdd() {
    this.carryforwardRequest.carryforwardDays = null;
  }


  //Mayu
  getLeaveAllocation() {
    this.leaveAllocationService.getCarryForwardAnualLeave(this.info.username).subscribe(data => {
      this.annualLeaveByUsername = data;
    })
  }

  getSuccessMessage() {
    this.interactionService.msgDataSource$.subscribe(data => {
      if (data == "carryforwardLeaveRequestSent") {
        this.getCarryforwardLeaveRequest(); 
        this.getLeaveAllocation();       
      }
    })
  }

  giveAlertMessage(carryforwardRequest) {
    if (this.carryforwardRequest.carryforwardDays==null) {
      this.interactionService.upadateMsg("error");
    } else if ((this.annualLeaveByUsername.allocatedDays - this.annualLeaveByUsername.utilizedDays) < this.carryforwardRequest.carryforwardDays) 
            {
              this.interactionService.upadateMsg("error");
              this.clearAfterAdd()
              
            } else if (1 > this.carryforwardRequest.carryforwardDays) {
                        this.interactionService.upadateMsg("error");
                        this.clearAfterAdd()

                    } else {
                      this.interactionService.sendCarryForwardLeaveRequest(this.carryforwardRequest);
                      this.interactionService.upadateMsg("null");

                    } 
          }
  //End
}
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
import { LeaveAllocationService } from 'src/app/services/leave-management/leave-allocation.service';
import { LeaveAllocation } from 'src/app/models/leave-management/leave-allocation';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-remain-leave',
  templateUrl: './remain-leave.component.html',
  styleUrls: ['./remain-leave.component.css']
})
export class RemainLeaveComponent implements OnInit {
  info: any;
  allocationLeaveByUsername: LeaveAllocation[];

  constructor(
    private token: TokenStorageService,
    private leaveAllocationService: LeaveAllocationService,
    private interactionService: InteractionService
  ) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.getLeaveAllocation();
    this.getSuccessMessage();
  }

  getLeaveAllocation() {
    this.leaveAllocationService.getAllLeaveAllocationByUser(this.info.username).subscribe(data => {
      this.allocationLeaveByUsername = data;
    })
  }

  getSuccessMessage() {
    this.interactionService.msgDataSource$.subscribe(data => {
      if (data == "leaveRequestSent" || data == "cancelSuccess" || data == "carryforwardLeaveRequestSent") {
        this.getLeaveAllocation();
      }
    })
  }
}

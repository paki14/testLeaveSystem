import { LeaveRequest } from './../../../../../../../models/leave-management/leave-request';
import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-view-leave-details',
  templateUrl: './view-leave-details.component.html',
  styleUrls: ['./view-leave-details.component.css']
})
export class ViewLeaveDetailsComponent implements OnInit {

  leaveRequest: LeaveRequest = new LeaveRequest();

  constructor(
    private interactionService: InteractionService,
  ) { }

  ngOnInit() {
    this.getLeaveRequest();
  }

  getLeaveRequest() {
    this.interactionService.leaveRequestDataSource$.subscribe(data =>{
      this.leaveRequest = data;
    })
  }
}

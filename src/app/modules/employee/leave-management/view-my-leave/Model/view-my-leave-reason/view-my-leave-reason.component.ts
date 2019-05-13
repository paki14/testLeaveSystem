import { Component, OnInit } from "@angular/core";
import { InteractionService } from "src/app/services/interaction.service";
import { LeaveRequest } from "src/app/models/leave-management/leave-request";

@Component({
  selector: "app-view-my-leave-reason",
  templateUrl: "./view-my-leave-reason.component.html",
  styleUrls: ["./view-my-leave-reason.component.css"]
})
export class ViewMyLeaveReasonComponent implements OnInit {
  leaveRequest: LeaveRequest = new LeaveRequest();
  constructor(private interactionService: InteractionService) {}

  ngOnInit() {
    this.getLeaveRequest();
  }
  getLeaveRequest() {
    this.interactionService.leaveRequestDataSource$.subscribe(data => {
      this.leaveRequest = data;
    });
  }
}

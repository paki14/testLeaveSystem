import { Component, OnInit } from '@angular/core';
import { RejectCancelRequest } from 'src/app/models/leave-management/reject-cancel-request';
import { InteractionService } from 'src/app/services/interaction.service';
import { RejectLeaveService } from 'src/app/services/leave-management/reject-leave.service';

@Component({
  selector: 'app-view-reject-details',
  templateUrl: './view-reject-details.component.html',
  styleUrls: ['./view-reject-details.component.css']
})
export class ViewRejectDetailsComponent implements OnInit {
  rejectCancelRequest:RejectCancelRequest;
  requestId:number
  constructor(private interactionService: InteractionService,
    private rejectcancelLeaveService:RejectLeaveService ) { }

  ngOnInit() {
    this.getLeaveRequest()
  
  }
  getLeaveRequest(){
    this.interactionService.leaveRequestDataSource$.subscribe(data=>{
      this.requestId=data.id;
      console.log(this.requestId)
      this.getRejectCancelRequest()
    })
  }

  getRejectCancelRequest(){
    this.rejectcancelLeaveService.getRejectCancelRequest(this.requestId).subscribe(data=>{
      this.rejectCancelRequest=data;
      console.log(this.rejectCancelRequest)
    });
  }
}

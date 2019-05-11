import { Component, OnInit } from '@angular/core';
import { RejectCarryforward } from 'src/app/models/leave-management/reject-carryforward';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
import { RejectCarryforwardRequestService } from 'src/app/services/leave-management/reject-carryforward-request.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-reject-carryforward-request-details',
  templateUrl: './reject-carryforward-request-details.component.html',
  styleUrls: ['./reject-carryforward-request-details.component.css']
})
export class RejectCarryforwardRequestDetailsComponent implements OnInit {
rejectCarryRequest=new RejectCarryforward();
  constructor( private token: TokenStorageService,
    private rejectCarryRequestService: RejectCarryforwardRequestService,
    private interactionService: InteractionService) { }
    info:any
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
    };
    this.getRejectCarryForward()
  }
  getRejectCarryForward(){
    this.rejectCarryRequestService.getRejectCarryrequest(this.info.username).subscribe(data=>{
      this.rejectCarryRequest=data;
    })
  }
  
}

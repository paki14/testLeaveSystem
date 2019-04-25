import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../../../../../../services/interaction.service';
import { TokenStorageService } from '../../../../../../services/login/token-storage.service';
import { CarryforwardLeaveRequestService } from '../../../../../../services/leave-management/carryforward-leave-request.service';
import { RejectCarryforwardData } from '../../../../../../models/leave-management/carryforward-leave-request';

@Component({
  selector: 'app-reject-carryforward-request',
  templateUrl: './reject-carryforward-request.component.html',
  styleUrls: ['./reject-carryforward-request.component.css']
})
export class RejectCarryforwardRequestComponent implements OnInit {

  rejectCarryforwardRequestData: RejectCarryforwardData = new RejectCarryforwardData();
  info: any;
  constructor(
    private carryforwardLeaveRequestService: CarryforwardLeaveRequestService,
    private token: TokenStorageService,
    private interactionService: InteractionService
  ) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.getCarryforwardLeave();
  }

  getCarryforwardLeave() {
    this.interactionService.carryforwardRequestIdDataSource$.subscribe(data => {
      this.rejectCarryforwardRequestData.carryforwardRequestData = data;
    })
  }

  rejectCarryforwardRequestMethod() {
    console.log(this.rejectCarryforwardRequestData);
    this.carryforwardLeaveRequestService.rejectCarryforwardRequest(this.info.username, this.rejectCarryforwardRequestData).subscribe(data => {
      console.log(data);
    });
  }
}

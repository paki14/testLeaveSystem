import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../../../../../services/login/token-storage.service';
import { CarryforwardLeaveRequestService } from '../../../../../../services/leave-management/carryforward-leave-request.service';
import { InteractionService } from '../../../../../../services/interaction.service';
import { CarryforwardRequestData } from '../../../../../../models/leave-management/carryforward-leave-request';

@Component({
  selector: 'app-accept-carryforward-request',
  templateUrl: './accept-carryforward-request.component.html',
  styleUrls: ['./accept-carryforward-request.component.css']
})
export class AcceptCarryforwardRequestComponent implements OnInit {
  info: any;
  carryforwardRequestData: CarryforwardRequestData;
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
    this.getCarryforwardLeave()
  }
  getCarryforwardLeave() {
    this.interactionService.carryforwardRequestIdDataSource$.subscribe(data => {
      this.carryforwardRequestData = data;
      console.log(this.carryforwardRequestData);
    })
  }

  accecptCarryforwardRequestMethod() {
    this.carryforwardLeaveRequestService.acceptCarryforwardRequest(this.info.username, this.carryforwardRequestData).subscribe(data => {
      console.log(data);
    });
  }
}

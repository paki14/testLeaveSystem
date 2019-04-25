import { Component, OnInit } from '@angular/core';
import { SelfServiceService } from 'src/app/services/self-service/self-service.service';
import { SelfService } from 'src/app/models/self-service/self-service';
import { UserService } from 'src/app/services/self-service/user.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';

@Component({
  selector: 'app-view-individuals-complains',
  templateUrl: './view-individuals-complains.component.html',
  styleUrls: ['./view-individuals-complains.component.css']
})
export class ViewIndividualsComplainsComponent implements OnInit {
  info : any;
  constructor(private selfServiceService: SelfServiceService, private userService: UserService, private interactionService: InteractionService, private token : TokenStorageService) { }
  selfService: SelfService[];
  selfServiceObj = new SelfService();
  ngOnInit(){
    this.getSelfServiceByPendingStatus();

    this.interactionService.msgDataSource$.subscribe(data =>{
      this.getSelfServiceByPendingStatus();
    })
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.selfServiceService.getSpecificDetails(this.info.username).subscribe(data => {
      this.selfService=data;
      console.log(data);
    });
  }

  sendSelfServiceToModal(selfService) {
    console.log(selfService);
    this.selfServiceObj = selfService;
    this.selfServiceObj.status = "Accepted";
    this.interactionService.sendSelfService(this.selfServiceObj);
  }

  getSelfServiceByPendingStatus() {
    return this.selfServiceService.getSelfServiceByPendingStatus().subscribe(
      data => {
        this.selfService = data;
        console.log(data);
      })
  }

  rejectSelfService(selfService) {
    console.log(selfService);
    this.selfServiceObj = selfService;
    this.selfServiceObj.status = "Rejected";
    this.interactionService.sendSelfService(this.selfServiceObj);
  }
}

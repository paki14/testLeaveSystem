import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';
import { SelfService } from 'src/app/models/self-service/self-service';
import { SelfServiceService } from 'src/app/services/self-service/self-service.service';

@Component({
  selector: 'app-reject-service',
  templateUrl: './reject-service.component.html',
  styleUrls: ['./reject-service.component.css']
})
export class RejectServiceComponent implements OnInit {

  constructor(private interactionService:InteractionService,private selfServiceService: SelfServiceService) { }
  selfService: SelfService[];
  selfServiceObj = new SelfService();
  msg: any;
  ngOnInit() {
    this.getSelfServiceFromSelfServiceInteraction();

    this.interactionService.selfServiceDataSource$.subscribe(data =>{
      this.selfServiceObj = data;
    })
  }
  getSelfServiceFromSelfServiceInteraction(){
    this.interactionService.selfServiceDataSource$.subscribe(data => {
      this.selfServiceObj=data;
    })
  }
  
  sendSelfServiceObjToReject() {
    console.log(this.selfServiceObj);
    this.selfServiceService.updateSelfServiceByUser(this.selfServiceObj).subscribe(data => {
      this.interactionService.upadateMsg("Rejected");
    })
  }


}

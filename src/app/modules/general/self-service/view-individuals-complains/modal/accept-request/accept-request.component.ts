import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';
import { SelfServiceService } from 'src/app/services/self-service/self-service.service';
import { SelfService } from 'src/app/models/self-service/self-service';

@Component({
  selector: 'app-accept-request',
  templateUrl: './accept-request.component.html',
  styleUrls: ['./accept-request.component.css']
})
export class AcceptRequestComponent implements OnInit {
  constructor(private selfServiceService: SelfServiceService, private interactionService:InteractionService) { }
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
  
  sendSelfServiceObjToAccept() {
    console.log(this.selfServiceObj);
    this.selfServiceService.updateSelfServiceByUser(this.selfServiceObj).subscribe(data => {
      this.msg = "Data updated successfully";
      this.interactionService.upadateMsg("Accepted");
    })
  }

}

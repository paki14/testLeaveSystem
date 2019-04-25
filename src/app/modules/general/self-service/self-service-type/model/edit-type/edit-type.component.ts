import { Component, OnInit } from '@angular/core';
import { SelfServiceType } from 'src/app/models/self-service/self-service-type';
import { SelfServiceTypeService } from 'src/app/services/self-service/self-service-type.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-edit-type',
  templateUrl: './edit-type.component.html',
  styleUrls: ['./edit-type.component.css']
})
export class EditTypeComponent implements OnInit {
  selfServiceType: SelfServiceType[];
  selfServiceTypeObj = new SelfServiceType();
  msg: any;
  constructor(private selfServiceTypeService: SelfServiceTypeService, private interactionService:InteractionService) { }

  ngOnInit() {
    this.getSelfServiceType();
    this.getSelfServiceTypeFromSelfServiceInteraction();
  }

  getSelfServiceTypeFromSelfServiceInteraction(){
    this.interactionService.selfServiceTypeDataSource$.subscribe(data => {
      this.selfServiceTypeObj=Object.assign({}, data);
    })
  }

  getSelfServiceType() {
    this.selfServiceTypeService.getAllSelfServiceType().subscribe(data => {
      this.selfServiceType = data;
      console.log(data);
    })
  }
  
  updateSelfServiceType() {
    this.selfServiceTypeService.updateSelfServiceType(this.selfServiceTypeObj).subscribe(data => {
      console.log(data);
      this.msg = "Data updated successfully";
      this.getSelfServiceType();
      this.interactionService.upadateMsg("Updated");
    })
  }
  // deleteId(selfServiceType) {
  //   console.log(selfServiceType);
  //   this.selfServiceTypeObj = Object.assign({}, null);
  // }

}
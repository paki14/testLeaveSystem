import { Component, OnInit } from '@angular/core';
import { SelfServiceType } from 'src/app/models/self-service/self-service-type';
import { SelfServiceTypeService } from 'src/app/services/self-service/self-service-type.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-delet-type',
  templateUrl: './delet-type.component.html',
  styleUrls: ['./delet-type.component.css']
})
export class DeletTypeComponent implements OnInit {
  selfServiceType: SelfServiceType[];
  selfServiceTypeObj = new SelfServiceType();
  msg: any;
  constructor(private selfServiceTypeService: SelfServiceTypeService, private interactionService: InteractionService) { }

  ngOnInit() {
    // this.getSelfServiceType();
    this.getSelfServiceTypeFromSelfServiceInteraction();
    
  }

  getSelfServiceType() {
    this.selfServiceTypeService.getAllSelfServiceType().subscribe(data => {
      this.selfServiceType = data;
      console.log(data);
    })
  }

  deleteId(selfServiceType) {
    console.log(selfServiceType);
    this.selfServiceTypeObj = Object.assign({}, this.selfServiceTypeObj);
    this.getSelfServiceType();
  }

  deleteSelfServiceType() {
    this.selfServiceTypeService.deleteSelfServiceType(this.selfServiceTypeObj).subscribe(data => {
      console.log(data);
      this.msg = "ssss successfully";
      this.getSelfServiceType();
      this.interactionService.upadateMsg("Deleted");
    })
  }

  getSelfServiceTypeFromSelfServiceInteraction(){
    this.interactionService.selfServiceTypeDataSource$.subscribe(data => {
      this.selfServiceTypeObj=data;
    })
  }

}

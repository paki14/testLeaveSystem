import { Component, OnInit } from '@angular/core';
import { SelfServiceType } from 'src/app/models/self-service/self-service-type';
import { SelfServiceTypeService } from 'src/app/services/self-service/self-service-type.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-self-service-type',
  templateUrl: './self-service-type.component.html',
  styleUrls: ['./self-service-type.component.css']
})
export class SelfServiceTypeComponent implements OnInit {

  selfServiceType: SelfServiceType[];
  selfServiceTypeObj = new SelfServiceType();
  msg: any;
  responseMsg: string;


  constructor(private selfServiceTypeService: SelfServiceTypeService, private interactionService: InteractionService) { }

  ngOnInit() {
    this.getSelfServiceType();
    this.interactionService.msgDataSource$.subscribe(data => {
      this.getSelfServiceType();

    })
  }

  getSelfServiceType() {
    this.selfServiceTypeService.getAllSelfServiceType().subscribe(data => {
      this.selfServiceType = data;
      console.log(data);
    })
  }

  createSelfServiceType() {
    this.selfServiceTypeService.createSelfServiceType(this.selfServiceTypeObj).subscribe(data => {
      console.log(data);
      this.getSelfServiceType();
      this.responseMsg = "success";
      this.responseMsgTimeOut();
    })
    this.responseMsg = "fail";
    this.responseMsgTimeOut();
  }
  responseMsgTimeOut() {
    setTimeout(() => {
      this.responseMsg = null;
    }, 3000);
  }

  getSelfServiceTypeById(selfServiceType) {
    this.interactionService.sendSelfServiceType(selfServiceType);
    console.log(selfServiceType);
  }

  deleteSelfServiceType() {
    this.selfServiceTypeService.deleteSelfServiceType(this.selfServiceTypeObj).subscribe(data => {
      console.log(data);
      // this.getSelfServiceType();
      this.msg = "Deleted successfully";
    })
  }


  addUserForm = new FormGroup({
    selfServiceTypeName: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z]*$'),
      Validators.maxLength(10)

    ])),

  }
  )

}

import { Component, OnInit } from '@angular/core';
import { WelfareEventService } from '../../../Service/welfare-event.service';
import { WelfareEvent } from '../../../Model/welfare-event';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';
@Component({
  selector: 'app-create-welfare-event',
  templateUrl: './create-welfare-event.component.html',
  styleUrls: ['./create-welfare-event.component.css']
})
export class CreateWelfareEventComponent implements OnInit {
  welfareEventObj = new WelfareEvent;
  welfareEvent: WelfareEvent[];
  

  constructor(private welfareEventService: WelfareEventService) { }

  ngOnInit() {

    
  }
  addWelfareEvent(){
    this.welfareEventObj.promoteDate = new Date();
    this.welfareEventService.createWelfareEvent(this.welfareEventObj).subscribe(data=>{
    alert("welfare Event added");
    console.log(data);
    });
  
    
  }
  welfareform=new FormGroup(
    {
      date:new FormControl('',Validators.compose([
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3)
      ])),
      welName: new FormControl('', Validators.compose([
        Validators.required,
        ])),
        Budget:new FormControl('', Validators.compose([
          Validators.required,
          ])) ,
          Notification:new FormControl('', Validators.compose([
            Validators.required,
          ]))
      }
      )
    }

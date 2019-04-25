import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AddDeniedPromotionService } from '../../../../services/add-denied-promotion.service';
import { AddDeniedPromotion } from '../../../../models/add-denied-promotion';


import { DesignationService } from 'src/app/modules/employee/employee-management/appointment/service/designation.service';
import { Designation } from 'src/app/modules/employee/employee-management/appointment/models/designation.model';

@Component({
  selector: 'app-add-denied-promotion',
  templateUrl: './add-denied-promotion.component.html',
  styleUrls: ['./add-denied-promotion.component.css']
})
export class AddDeniedPromotionComponent implements OnInit {
  deniedpromation: FormGroup;
  deniedPromotionObj: AddDeniedPromotion = new AddDeniedPromotion();
  deniedPromotion: AddDeniedPromotion[];

  // userObj=new User();
  // users:User[];
  // msg: any;
  
  designation:Designation[];
  
  msg:any;


  constructor(private adddeniedpromotionservice: AddDeniedPromotionService, private designationService: DesignationService) {
  }

  ngOnInit() {
    // this.addDeniedPromortion();
    //this.getUser();
    this.getDesignation();
  }

  addDeniedPromortion() {
    this.adddeniedpromotionservice.createDeniedPromotion(this.deniedPromotionObj).subscribe(data => {
     // alert("denied promotion added");
      console.log(data);
      //this.addDeniedPromortion();
    });
  }

  // getUser() {
  //   return this.userService.getUser().subscribe(
  //     data => {
  //       this.users = data;
  //      this.userObj.id=0;
  //     }
  //   )
  // }

 getDesignation(){
   this.designationService.getDesignation().subscribe(data=>{
     this.designation=data;
    //  console.log(data);
   });
 }

}

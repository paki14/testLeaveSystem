import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormControl } from '@angular/forms';
import { AddPromotion } from '../../../../models/add-promotion';
import { AddPromotionService } from '../../../../Services/add-promotion.service';
import { UserService } from 'src/app/services/self-service/user.service';
import { User } from 'src/app/models/self-service/user';
import { RequestPromotionService } from '../../../../services/request-promotion.service';
import { Designation } from '../../../../models/designation';

@Component({
  selector: 'app-add-promotion',
  templateUrl: './add-promotion.component.html',
  styleUrls: ['./add-promotion.component.css']
})
export class AddPromotionComponent implements OnInit {

  addPromotionObj: AddPromotion = new AddPromotion();
  addPromotion: AddPromotion[];
  designations: Designation[];
  designationObj = new Designation();
  userObj = new User();
  users: User[];
  msg: any;

  //insertpromation: FormGroup;
  constructor(private addPromotionService: AddPromotionService,private reqProService: RequestPromotionService, private userService: UserService) {
  }

  ngOnInit() {
    this.getUser();
   this.getDesignation();
  }
  addNewPromotion() {
    this.addPromotionService.createAddPromotion(this.addPromotionObj).subscribe(data => {
      console.log(data);
    });

  }
  getUser() {
    return this.userService.getUser().subscribe(
      data => {
        this.users = data;
        this.userObj.id = 0;
      }
    )
  }
  getDesignation() {
    return this.reqProService.getAllDesignation().subscribe(
      data => {
        this.designations = data;
        // this.designationObj.id=0;
        console.log(data);
      }
    )
  }
}
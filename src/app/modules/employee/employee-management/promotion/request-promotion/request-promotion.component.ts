import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlDirective, Validators } from '@angular/forms';
import { RequestPromotion } from '../models/request-promotion';
import { RequestPromotionService } from '../services/request-promotion.service';
import { Department } from '../models/department';
import { UserService } from 'src/app/services/self-service/user.service';
import { User } from 'src/app/models/self-service/user';
import { Designation } from '../models/designation';


@Component({
  selector: 'app-request-promotion',
  templateUrl: './request-promotion.component.html',
  styleUrls: ['./request-promotion.component.css']
})
export class RequestPromotionComponent implements OnInit {
  addRequestPromotionObj = new RequestPromotion();
  requestpro: RequestPromotion[];
  departments: Department[];
  depObj = new Department();
  designations: Designation[];
  designationObj = new Designation();
  userObj = new User();
  users: User[];
  // requestPromotion: FormGroup;

  constructor(private reqProService: RequestPromotionService, private userService: UserService) { }

  ngOnInit() {
    this.getDepartments();
    this.getUser();
    this.getDesignation();
  }
  addRequestPromotion() {
    this.reqProService.postPromotionRequest(this.addRequestPromotionObj).subscribe(addpro => {
      console.log(addpro);
      this.clearRequestPromotion();
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
  getDepartments() {
    return this.reqProService.getAllDepartment().subscribe(
      data => {
        this.departments = data;
        this.depObj.id = 0;
      }
    )
  }

  clearRequestPromotion() {
    this.addRequestPromotionObj.userId = null;
    this.addRequestPromotionObj.promotionRemark = null;
    this.addRequestPromotionObj.recommendedBy = null;
    this.addRequestPromotionObj.designationId = null;
  }
}

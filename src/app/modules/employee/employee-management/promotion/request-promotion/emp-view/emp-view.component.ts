import { Component, OnInit } from '@angular/core';
import { RequestPromotionService } from '../../services/request-promotion.service';
import { UserService } from 'src/app/services/self-service/user.service';
import { User } from 'src/app/models/self-service/user';
import { Designation } from '../../models/designation';
import { Department } from 'src/app/models/self-service/department';
import { RequestPromotion } from '../../models/request-promotion';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';

@Component({
  selector: 'app-emp-view',
  templateUrl: './emp-view.component.html',
  styleUrls: ['./emp-view.component.css']
})
export class EmpViewComponent implements OnInit {
  addRequestPromotionObj = new RequestPromotion();
  requestpro: RequestPromotion[];
  departments: Department[];
  depObj = new Department();
  designations: Designation[];
  designationObj = new Designation();
  userObj = new User();
  users: User[];
  uname:String;
  msg: any;
  info:any;
  // requestPromotion: FormGroup;

  constructor(private reqProService: RequestPromotionService, 
    private userService: UserService,
    private token: TokenStorageService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.uname = this.info.username;

    this.getDepartments();
    this.getUser();
    this.getDesignation();
  }
  addRequestPromotionemp() {
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

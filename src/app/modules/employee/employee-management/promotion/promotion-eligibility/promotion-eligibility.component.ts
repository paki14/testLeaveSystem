import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { RequestPromotion } from '../models/request-promotion';
import { RequestPromotionService } from '../services/request-promotion.service';
import { Designation } from '../models/designation';
import { User } from 'src/app/models/self-service/user';
import { UserService } from 'src/app/services/self-service/user.service';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';

@Component({
  selector: 'app-promotion-eligibility',
  templateUrl: './promotion-eligibility.component.html',
  styleUrls: ['./promotion-eligibility.component.css']
})
export class PromotionEligibilityComponent implements OnInit {
  requestpro: RequestPromotion[];
  users: User[];
  desig: Designation[];
  msg: any;
  userId:number;
  reqPromotion: any;
  reqproforuser:any;

  displayedColumns: string[] = ['id', 'userId', 'designationId', 'recommendedBy', 'promotionRemark', 'createdAt', 'check'];

  // dataSource = new MatTableDataSource<any>(this.reqproforuser);
  dataSource = new MatTableDataSource<any>(this.reqPromotion);
  


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private reqProService: RequestPromotionService, private userService: UserService, private token: TokenStorageService) { }
  info: any;
  role: string;
  uname: String;

  ngOnInit() {

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  
    this.uname = this.info.username;

    this.getAllRequestPromotionList();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // this.getRequestPromotionByUserId();
    this.getUserIdByLoginUserName();
  }
  getAllRequestPromotionList() {
    this.reqProService.getAllPromotionRequest().subscribe(data => {
      this.reqPromotion = data;
      this.dataSource = new MatTableDataSource<any>(this.reqPromotion);

      console.log(data);
    });
  }

  getUserIdByLoginUserName(){
    this.reqProService.getUserIdByLoginName(this.uname).subscribe(data=>{
      this.userId=data.id;
      console.log(data.id);
      this.getRequestPromotionByUserId(data.id);
    });
  }

  getRequestPromotionByUserId(userId){
    this.reqProService.getPromotionRequestByUserId(userId).subscribe(data=>{
      this.reqproforuser=data;
      console.log(data);
    })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deletePro(delreqPromotion) {
    this.reqProService.deletePromotionRequest(delreqPromotion).subscribe(data => {
      this.reqPromotion.id = delreqPromotion.id;
      console.log(data);
      this.msg = "Deleted successfully";
      this.getAllRequestPromotionList();
    })
  }
}

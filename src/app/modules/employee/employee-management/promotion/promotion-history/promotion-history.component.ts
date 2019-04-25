import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { AddPromotionService } from '../Services/add-promotion.service';
import { AddPromotion } from '../models/add-promotion';
import { Designation } from '../models/designation';
import { User } from 'src/app/models/self-service/user';
import { UserService } from 'src/app/services/self-service/user.service';
import { RequestPromotionService } from '../services/request-promotion.service';

@Component({
  selector: 'app-promotion-history',
  templateUrl: './promotion-history.component.html',
  styleUrls: ['./promotion-history.component.css']
})
export class PromotionHistoryComponent implements OnInit {
  promoViews: AddPromotion[];
  user:User[];
  proEditObj: AddPromotion = new AddPromotion();
  designations: Designation[];
  designationObj = new Designation();
  userObj = new User();
  users: User[];
  msg:any;
  promotionview: any;

  displayedColumns: string[] = ['id', 'userId','designationId', 'promdate', 'promremark', 'promsalary', 'promotedBy', 'edit/delete'];


  dataSource = new MatTableDataSource<any>(this.promotionview);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private addPromotionService: AddPromotionService,
    private userService: UserService,
    private reqProService: RequestPromotionService) { }

  ngOnInit() {

    this.getAddPromotionHistory();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getDesignation();
  }

  getAddPromotionHistory() {
    this.addPromotionService.getAddPromotion().subscribe(data => {
      this.promotionview = data;
      this.dataSource = new MatTableDataSource<any>(this.promotionview);
      
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

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editPro(pro) {
    this.proEditObj = Object.assign({}, pro);
  }

  updatePro() {
    this.addPromotionService.editPromotion(this.proEditObj).subscribe(data => {
      // alert("User updated"); 
      this.getAddPromotionHistory();
    });
  }

  deletepro(deluser) {
    this.addPromotionService.deletePromotion(deluser).subscribe(data => {
      this.promotionview.id = deluser.id;
      // alert("User deleted");
      this.getAddPromotionHistory();
    });
  }
}

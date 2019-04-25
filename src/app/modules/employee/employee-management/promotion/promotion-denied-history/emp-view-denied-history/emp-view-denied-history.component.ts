import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AddDeniedPromotion } from '../../models/add-denied-promotion';
import { AddDeniedPromotionService } from '../../services/add-denied-promotion.service';
import { DesignationService } from '../../../appointment/service/designation.service';
import { Designation } from '../../../appointment/models/designation.model';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';

@Component({
  selector: 'app-emp-view-denied-history',
  templateUrl: './emp-view-denied-history.component.html',
  styleUrls: ['./emp-view-denied-history.component.css']
})
export class EmpViewDeniedHistoryComponent implements OnInit {
  addDeniedPromotion: AddDeniedPromotion[];
  editObj: AddDeniedPromotion = new AddDeniedPromotion();
  // deObj: AddDeniedPromotion=new AddDeniedPromotion();
  designation: Designation[];
  uname:String;
  msg: any;
  info:any;
  deproforuser: any;
  userId: number;

  displayedColumns: string[] = ['deniedID', 'empname', 'position', 'denieddate', 'deniedremark', 'deniedBy'];


  //Creditcheck : any;

  dataSource = new MatTableDataSource<any>(this.deproforuser);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private addDeniedPromotionService: AddDeniedPromotionService, 
    private designationService: DesignationService,
    private token: TokenStorageService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.uname = this.info.username;

    // this.getPromotionDeniedHistory();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getDesignation();
    this.getUserIdByLoginUserName();
  }

  getPromotionDeniedHistory() {
    this.addDeniedPromotionService.getAllDeniedPromotion().subscribe(data => {
      this.addDeniedPromotion = data;
      this.dataSource = new MatTableDataSource<any>(this.addDeniedPromotion);
      console.log(data);
    });
  }

  getUserIdByLoginUserName() {
    this.addDeniedPromotionService.getUserIdByLoginName(this.uname).subscribe(data => {
      this.userId = data.id;
      console.log(data.id);
      return this.getDeniedPromotionByUserId(data.id);

    });
  }

  getDeniedPromotionByUserId(userId) {
    this.addDeniedPromotionService.getDeniedPromotionByUserId(userId).subscribe(data => {
      this.deproforuser = data;
      this.dataSource = new MatTableDataSource<any>(this.deproforuser);
      console.log(data);
    })
  }

  deleteUserById(denied) {
    this.addDeniedPromotionService.deleteDeniedPromotion(denied).subscribe(data => {
      this.editObj.id = denied.id;
      // alert("User deleted");

    });
    this.getPromotionDeniedHistory();
  }

  editStatus(dep) {
    console.log(dep);
    this.editObj = Object.assign({}, dep);
  }

  updateUserById() {
    this.addDeniedPromotionService.updateDeniedPromotion(this.editObj).subscribe(data => {
      // alert("User updated"); 
      this.getPromotionDeniedHistory();
    });
  }


  getDesignation() {
    this.designationService.getDesignation().subscribe(data => {
      this.designation = data;
      //  console.log(data);
    });
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AddDeniedPromotion } from '../models/add-denied-promotion';
import { AddDeniedPromotionService } from '../services/add-denied-promotion.service';
import { DesignationService } from '../../appointment/service/designation.service';
import { Designation } from '../../appointment/models/designation.model';


@Component({
  selector: 'app-promotion-denied-history',
  templateUrl: './promotion-denied-history.component.html',
  styleUrls: ['./promotion-denied-history.component.css']
})
export class PromotionDeniedHistoryComponent implements OnInit {
  addDeniedPromotion: AddDeniedPromotion[];
  editObj: AddDeniedPromotion=new AddDeniedPromotion();
  // deObj: AddDeniedPromotion=new AddDeniedPromotion();
  designation:Designation[];

  msg: any;

  displayedColumns: string[] = ['deniedID', 'empname', 'position', 'denieddate', 'deniedremark', 'deniedBy', 'edit/delete'];


//Creditcheck : any;

dataSource = new MatTableDataSource<any>(this.addDeniedPromotion);

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

  constructor(private addDeniedPromotionService: AddDeniedPromotionService , private designationService: DesignationService) { }

  ngOnInit() {
    this.getPromotionDeniedHistory();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getDesignation();
  }

  getPromotionDeniedHistory() {
    this.addDeniedPromotionService.getAllDeniedPromotion().subscribe(data => {
      this.addDeniedPromotion = data;
      this.dataSource = new MatTableDataSource<any>(this.addDeniedPromotion);
      console.log(data);
    });
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


  getDesignation(){
    this.designationService.getDesignation().subscribe(data=>{
      this.designation=data;
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
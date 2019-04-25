import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { GeneralWelfare } from '../Model/general-welfare';
import { WelfareEvent } from '../Model/welfare-event';
import { GeneralWelfareService } from '../Service/general-welfare.service';
import { WelfareEventService } from '../Service/welfare-event.service';

@Component({
  selector: 'app-general-welfare-employee-view',
  templateUrl: './general-welfare-employee-view.component.html',
  styleUrls: ['./general-welfare-employee-view.component.css']
})
export class GeneralWelfareEmployeeViewComponent implements OnInit {

  generalWelfareObj = new GeneralWelfare();
  generalwelfare: GeneralWelfare[];
  msg: any;
  displayedColumns: string[] = ['id','name','allocationdetails'];
  welfareEvent: WelfareEvent[];
  // generalwelfare:any;
  
  dataSource = new MatTableDataSource<any>(this.generalwelfare);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private generalWelfareService: GeneralWelfareService, 
    private welfareEventService: WelfareEventService) { }

  ngOnInit() {

    this.dataSource = new MatTableDataSource<any>(this.generalwelfare);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getWelfareEvent();
    this.getGeneralWelfare();

    
  }

  getGeneralWelfare() {
    this.generalWelfareService.getAllGeneralWelfare().subscribe(data => {
      this.generalwelfare = data;
      this.dataSource=new MatTableDataSource<any>(this.generalwelfare);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
      // console.log(data);
    });
  }

  createGeneralWelfare() {
    this.generalWelfareService.createGeneralWelfare(this.generalWelfareObj).subscribe(data => {
      this.getGeneralWelfare();
      alert("welfare Event added");
      // console.log(data);
    });
  }

  updateGeneralWelfare() {
    this.generalWelfareService.updateGeneralWelfare(this.generalWelfareObj).subscribe(data => {
      this.getGeneralWelfare();
    })
  }

  deleteGeneralWelfare() {
    this.generalWelfareService.deleteGeneralWelfare(this.generalWelfareObj).subscribe(data => {
      this.getGeneralWelfare();
    });
  }

  getWelfareEvent() {
    this.welfareEventService.getAllWelfareEvent().subscribe(data => {
      this.welfareEvent = data;
      // console.log(data)
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}



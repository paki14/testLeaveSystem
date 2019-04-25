import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.css']
})
export class ViewScheduleComponent implements OnInit {

  displayedColumns: string[] = ['id', 'date_for_training','module_name','sub_topics','trainer','send_notification_to_trainer','edit/delete'];

  planModule = [
   { 'id':'1', 'date_for_training':'17.11.2018','module_name':'Android Development','sub_topics':'sfsdfggf','trainer':'John','send_notification_to_trainer':'Send','edit/delete':''
   }
    
  ]
  dataSource = new MatTableDataSource<any>(this.planModule);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.planModule);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}


